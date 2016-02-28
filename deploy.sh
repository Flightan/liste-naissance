grunt build
cd dist
tar czf - . | ssh scaleway "( cd /home/deploy ; cat > file.tar.gz )"
