# data_to_dict.xlsx

# import json
# with open('out.txt') as f:
#     d = dict(x.rstrip().split(None, 1) for x in f)

# with open('data.txt', 'w') as f:
#     f.write(json.dumps(d))


# XLSX to CSV
# import pandas as pd
# data_xls = pd.read_excel('data_to_dict.xlsx', 'Sheet1', dtype=str, index_col=None)
# data_xls.to_csv('data.txt', encoding='utf-8', index=False)

# Repalcing a chrecter
# Read in the file
# with open('data.txt', 'r') as file:
#     filedata = file.read()

# # Replace the target string
# filedata = filedata.replace(":", ",")
# filedata = filedata.replace("[", "(")
# filedata = filedata.replace("]", ")")

# # Write the file out again
# with open('data.txt', 'w') as file:
#     file.write(filedata)

# import pandas as pd
# df = pd.read_excel('data_to_dict.xlsx', 'Sheet1')
# # key = df['Key'].values().tolist()
# for d, f in df.items():
#     print(d+"+"+f)
# # print(df.keys())


# import json
import pandas as pd

# # you could add index_col=0 if there's an index
df = pd.read_excel('/home/siddhanttotade/Documents/Docs/Programming/GIT/martle/app/martle_app_backend/data_to_dict.xlsx', index_col=None)
key = df['Key'].tolist()
val = df['Value'].replace("\\u200e", "", regex=True).tolist()
combine = dict(list(zip(key, val)))

print(str(combine))

# with open('/home/siddhanttotade/Documents/Docs/Programming/GIT/amazon_clone/src/app/data.txt', 'w') as f:
#     f.write(str(combine))

# with open('data.txt', 'r') as f:
#     print()
# print(("("+df['Key']+":"+df['Value']+")").to_list())

# with open('data.txt', 'w') as f:
#     f.write(str(df.to_numpy()))

# with open('data.json') as jsonF:
#     data = json.load(jsonF)
#     jdata = data['0']
#     # print(data)
#     for x in jdata:
#         print(x)

# import json
# import pandas as pd
# with open('data.txt', 'r') as f:
#     lst = f.read().replace("\n", ",")
#     # gst = lst.replace("\n", ",")
#     gst = dict(eval(lst))


# list = [('Hello', 'one'), ('Hello', 'Two'),
#         ('Bello', 'three'), ('Mello', 'four')]
# lst = (('hello', 'one'), ('hello', 'one'), ('hello', 'one'))
# lst = ("('Brand', 'Lenovo'), ('Manufacturer', 'Lenovo (India) Private Limited One of the below, Hefei Bitland Information Technology Co.Ltd - No.4088 Jiuxiu Road National Hefei economic & technology development area Hefei Anhui China LCFC（Hefei) Electronics Technology Co. Ltd. - NO.1-3188YUNGU ROAD HEFEI EXPORT PROCESSING ZONE. ANHUI PROVINCECHINA\xa0 Tech-Com(Shanghai) Computer Co Ltd - No.6 Ln.58San-Zhuang Rd. Songjiang EPZ ShangHai China Wistron InfoComillimeters (Kunshan) Co.Ltd - 168# First Avenue Kunshan Export Processing Zone Kunshan Jiangsu China Compal information technology (kunshan) CO. LTD. - Address, No. 58 the 1st street Kunshan Export Processing Zone Jiangsu P.R.O.C. CHINA Kunshan Hichain storage Co. Ltd - No. 88 Xinxiang Road\xa0 Avenue Kunshan CBZ Wujiang Hichain warehousing LTD - No.2088 Pangjin road Wujiang economic development area\xa0 Jiangsu China Importer Information, Lenovo India Pvt LTD. Level-2 Ferns Icon Building Outer Ring road\xa0 Marathalli Bangalore 560037'), ('Model', '82B500BHIN'), ('Model Name', 'Legion 5'), ('Model Year', '2020'), ('Product Dimensions', '36.3 x 26 x 2.4 cm; 2.3 Kilograms'), ('Batteries', '1 Lithium Polymer batteries required. (included)'), ('Item model number', '82B500BHIN'), ('RAM Size', '8 GB'), ('Memory Storage Capacity', '256 GB'), ('Memory Slots Available', '2'), ('Flash Memory Installed Size', '256 GB'), ('Ram Memory Installed Size', '8 GB'), ('Maximum Memory Supported', '16 GB'), ('Ram Memory Technology', 'DDR4'), ('Computer Memory Type', 'SODIMM'), ('Hard Drive Size','1 TB'), ('Hard Drive Interface', 'Serial ATA'), ('Hard Disk Rotational Speed', '5400 RPM'), ('Hard Disk Description', 'Hybrid Drive'), ('Optical Drive Type', 'No Optical Drive'), ('Operating System', 'Windows 10 Home'), ('Processor Brand', 'AMD'), ('Processor Speed', '3 GHz'), ('Processor Type', 'Ryzen 5 4600H'), ('Processor Count', '1'), ('Processor Model Number', 'AMD Ryzen 5 4600H'), ('Hardware Interface', 'USB Ethernet HDMI'), ('Graphics Card Description', 'Dedicated'), ('Graphics Card Ram Size', '4 GB'), ('Graphics RAM Type', 'GDDR6'), ('Graphics Card Interface', 'PCI Express'), ('Graphics Coprocessor', 'NVIDIA GeForce GTX 1650'), ('Resolution', '1080p'), ('Special Features', 'Anti reflective'), ('Mounting Hardware', 'Laptop'), ('Number Of Items', '3'), ('Software Included', 'Microsoft Office 365'), ('Standing screen display size', '15.6 Inches'), ('Display Type', 'LED'), ('Resolution', '1920 x 1080 Pixels'), ('Audio Details', 'Speakers'), ('Power Source', 'Battery Powered'), ('Battery Average Life', '6.8 Hours'), ('Batteries Included', 'Yes'), ('Batteries Required', 'Yes'), ('Battery Cell Composition', 'Polymer'), ('Wireless Type', 'Bluetooth 802.11ax'), ('Refresh Rate', '120 Hz'), ('Total Usb Ports', '5'), ('Keyboard Description', 'Gaming'), ('Connector Type', 'USB Ethernet HDMI'), ('Device interface - primary', 'Microphone Keyboard'), ('Form Factor', 'Laptop'), ('Device Type', 'Gaming laptop'), ('Manufacturer', 'Lenovo (India) Private Limited'), ('Country of Origin', 'China'), ('Item Weight', '2 kg 300 g')")
# print(dict(eval(lst)).values())
