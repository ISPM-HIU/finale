import ampalibe
from ampalibe import Messenger
from ampalibe.messenger import Action
import requests

chat = Messenger()

# defining the api-endpoint 
API_ENDPOINT = "http://173.249.22.169:9005/api/house/update"

# create a get started option to get permission of user.
# chat.get_started()

@ampalibe.command('/')
def main(sender_id, cmd, **ext):
    chat.send_action(sender_id, Action.mark_seen)
    chat.send_action(sender_id, Action.typing_on)

    data = {'command_text': cmd.lower()}
    try:
        # sending post request and saving response as response object
        res = requests.put(url = API_ENDPOINT, data = data)
        if res.status_code == 200:
            res_from_web = res.json()
            # print('res_from_web', res_from_web)
            chat.send_text(sender_id, "La commande a été effectuée")
            chat.send_action(sender_id, Action.typing_off)
        else:
            print("Request failed")
            chat.send_text(sender_id, "Veuillez bien formuler la question s'il vous plaît.")
            chat.send_action(sender_id, Action.typing_off)

    except Exception as error:
        chat.send_action(sender_id, Action.typing_off)
        chat.send_text(sender_id, "Veuillez bien formuler la question s'il vous plaît.")
        print(error)
