import configparser

parser = configparser.ConfigParser()

parser_dev = configparser.ConfigParser()
parser_prod = configparser.ConfigParser()

print(parser.read('mess.ini'))

print(parser.sections())
#print(parser['mariadb'])

for topic in parser:
    print(topic, parser[topic])
    if 'env' not in parser[topic]:
        continue
    topic_dic = dict(parser[topic])
    del topic_dic['env']
    if parser[topic]['env'] == 'prod':
        parser_prod[topic] = topic_dic
    else:
        parser_dev[topic] = topic_dic

#parser_dev['test'] = {'home': 'Lahmannstr. 5'}
print(parser_dev.sections())
with open('dev_config.ini', 'w') as f1:
    parser_dev.write(f1)

with open('prod_config.ini', 'w') as f1:
    parser_prod.write(f1)
