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




