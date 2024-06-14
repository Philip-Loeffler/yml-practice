#!/bin/sh
echo "::debug::RUnning entrypoint.sh"
echo "Hello $1"
echo "INPUT_WHO_TO_GREET: $INPUT_WHO_TO_GREET"
time=$(date)
echo "time=$time" >> $GUTHUB_OUT
echo "HELLO_TIME=$time" >> $GITHUB_ENV
