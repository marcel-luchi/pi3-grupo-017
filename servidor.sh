export PATH=$PATH":"$HOME"/pi3-grupo-017/venv/bin"
nohup flask --app tanahora --debug run --host 0.0.0.0 > tanahora.log 2>&1 &
sleep 15
nohup ngrok http --url=herring-above-multiply.ngrok-free.app 5000 > ngrok.log 2>&1 &
echo "Started"

