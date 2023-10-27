import pandas as pd
import json

def xlsx_to_jsonl(input_file, output_file, sheet_name='Sheet'):
    data = pd.read_excel(input_file, sheet_name=sheet_name)
    data_json = data.to_dict(orient='records')

    with open(output_file, 'w') as f:
        for record in data_json:
            json.dump(record, f)
            f.write('\n')

input_file_path = 'SD-Pairs.xlsx'
output_file_path = 'SD-Pairs.jsonl'

xlsx_to_jsonl(input_file_path, output_file_path)



data = []

with open('SD-Pairs.jsonl', 'r') as file:
    for line in file:
        json_obj = json.loads(line)
        data.append(json_obj)

formatted_data = []
for entry in data:
    formatted_entry = {
        "text": f"<s> [INST] <<SYS>> You are a helpful, reliable, respectful, and honest doctor's assistant. Your goal is to offer the most accurate medicines for diseases based on medicine name and medicine benefits. <</SYS>> This are the benefits of medicine {entry['Benefits of this Product']}. [/INST] {entry['Product Name']} </s>"
    }
    formatted_data.append(formatted_entry)

with open('SD-Pairs-LLama2-formatted.jsonl', 'w') as file:
    for entry in formatted_data:
        json.dump(entry, file)
        file.write('\n')
