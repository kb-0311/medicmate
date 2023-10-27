import pandas as pd
import re
df = pd.read_csv('1mg-product_data.csv',encoding='latin-1')

df = df.sample(n=5000, replace=False)
df.to_csv('1mg-final.csv', index=False)
columns_to_remove = ["Product Information","Side Effects","How to use this Product","how this product works","Quick tips of this Product"]
df.drop(columns=columns_to_remove, inplace=True)
df.to_csv('1mg-train-data.csv', index=False)

import csv
import json

def csv_to_jsonl(csv_file_path, jsonl_file_path):
    with open(csv_file_path, 'r', newline='', encoding='utf-8') as csv_file, open(jsonl_file_path, 'w', encoding='utf-8') as jsonl_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            json.dump(row, jsonl_file, ensure_ascii=False)
            jsonl_file.write('\n')

# Replace 'input.csv' with the path to your CSV file and 'output.jsonl' with the desired output JSONL file.
csv_to_jsonl('1mg-train-data.csv', '1mg-train-data.jsonl')

data = []

with open('1mg-train-data.jsonl', 'r') as file:
    for line in file:
        json_obj = json.loads(line)
        data.append(json_obj)

formatted_data = []
for entry in data:
    formatted_entry = {
        "text": f"<s> [INST] <<SYS>> You are a helpful, reliable, respectful, and honest doctor's assistant. Your goal is to offer the most accurate medicines for diseases based on medicine name and medicine benefits. <</SYS>> This are the benefits of medicine {entry['Benefits of this Product']}. [/INST] {entry['Product Name']} </s>"
    }
    formatted_data.append(formatted_entry)

with open('1mg-train-data-LLama2-formatted.jsonl', 'w') as file:
    for entry in formatted_data:
        json.dump(entry, file)
        file.write('\n')

# pattern = r"\d+\wg"
# dosage = []
# new_df = pd.DataFrame(columns=["Product Information", "Benefits of this Product","Side Effects","How to use this Product","how this product works","Quick tips of this Product","Dosage"])
# cnt = 0
# for i in range(17000):
#     if cnt>=2500:
#         break
#     product = []
#     product.append(df.iloc[i]["Product Information"])
#     product.append(df.iloc[i]["Benefits of this Product"])
#     product.append(df.iloc[i]["Side Effects"])
#     product.append(df.iloc[i]["How to use this Product"])
#     product.append(df.iloc[i]["how this product works"])
#     product.append(df.iloc[i]["Quick tips of this Product"])
#     for j in product:

#         try:
#             d = re.findall(pattern, j)
#             if(len(d)):
#                 dosage.append(d[0])
#                 new_row = {"Product Information":j[0],"Benefits of this Product":j[1],"Side Effects":j[2],"How to use this Product":j[2],"how this product works":j[3],"Quick tips of this Product":j[4],"Dosage":j[5]}
#                 new_df = new_df.append(new_row, ignore_index=True)
#                 cnt += 1
#                 break
#         except:
#             continue

# print(new_df.iloc[1]["Dosage"])

# new_df.to_csv('1mg-final.csv', index=False)


