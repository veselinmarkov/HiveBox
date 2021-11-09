import random
import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(levelname)s – TEMPERATURE_IN_CELSIUS UNIT => DEBUG – %(message)s')

handler = logging.FileHandler('prog.log', 'w')
handler.setFormatter(formatter)
handler.setLevel(logging.WARNING)
logger.addHandler(handler)

handler = logging.StreamHandler()
handler.setFormatter(formatter)
#handler.setLevel(logging.DEBUG)
logger.addHandler(handler)

#message = ' – TEMPERATURE_IN_CELSIUS UNIT => DEBUG – '
for i in range(60):
    temp = int(random.random()*20 +20)
    if temp <30:
        logger.debug(str(temp))
    elif temp <35:
        logger.warning(str(temp))
    else:
        logger.critical(str(temp))