export PATH=$PATH":/home/orangepi/pi3-grupo-017/venv/bin"
nohup flask --app tanahora --debug run --host 0.0.0.0 > tanahora.log 2>&1 &
sleep 15
nohup ngrok http http://localhost:5000 > ngrok.log 2>&1 &
echo "Started"

