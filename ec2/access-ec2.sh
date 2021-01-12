# Download access key pair to allow access SSH
chmod 400 ~/Downloads/FirstInstanceKeyPair.pem

# Get Public IPv4 address of EC2 instance
# Public IP will be changed when instance was stopped and restarted
ssh -i ~/Downloads/FirstInstanceKeyPair.pem ec2-user@18.141.177.183