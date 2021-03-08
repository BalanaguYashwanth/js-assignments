# Program to convert an xml 
# file to json file 

# import json module and xmltodict 
# module provided by python 
import json 
import xmltodict 
import pandas as pd
from pandas.io.json import json_normalize
from json_excel_converter import Converter 
from json_excel_converter.xlsx import Writer
# open the input xml file and read 
# data in form of python dictionary 
# using xmltodict module 
with open("sample.xml") as xml_file: 
	
	data_dict = xmltodict.parse(xml_file.read()) 
	xml_file.close() 
	
	# generate the object using json.dumps() 
	# corresponding to json data 
	#print(data_dict)
	json_data = json.dumps(data_dict) 
	
	# Write the json data to output 
	# json file 
	with open("data1.json", "w") as json_file: 
		json_file.write(json_data) 
		json_file.close() 

#df = pd.json_normalize('data.json')
df = pd.read_json('data1.json')
#print(df['breakfast_menu'])
df.to_excel('output.xlsx',index=False)

#if possible to update json and populate into the df 

#conv = Converter()
#conv.convert('data.json', Writer(file='output1.xlsx'))


