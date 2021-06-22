curl $1 \
  -F operations='{ "query": "mutation ($file: Upload!) { uploadFile(file: $file) { uri filename mimetype encoding } }", "variables": { "file": null } }' \
  -F map='{ "0": ["variables.file"] }' \
  -F 0=@$2