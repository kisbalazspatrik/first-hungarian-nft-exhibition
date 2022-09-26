const collectibleApi = async(req, res) => {
  const query = req.query.id;

  if(parseInt(query) < 15) {
    let metadata = {}

    const attributes = [{
      "trait_type": "Event",
      "value": "First Hungarian Online NFT Exhibition"
    }];

    

    switch(query) {
      case '0':
        metadata = {
          "name": `MetaScyra`,
          "description": "First Hungarian Online NFT Exhibition",
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/MetaScyra.gif`,
          "attributes": attributes
        }
        break;
      case '1':
        metadata = {}
        break;
      case '2':
        metadata = {}
        break;
      case '3':
        metadata = {}
        break;
      case '4':
        metadata = {}
        break;
      case '5':
        metadata = {}
        break;
      case '6':
        metadata = {}
        break;
      case '7':
        metadata = {}
        break;
      case '8':
        metadata = {}
        break;
      case '9':
        metadata = {}
        break;
      case '10':
        metadata = {}
        break;
      case '11':
        metadata = {}
        break;
      default: 
        metadata = {}
        break;
    }
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The collectible you requested is out of range"})
  }
}

export default collectibleApi