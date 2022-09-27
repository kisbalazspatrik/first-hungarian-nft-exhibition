const collectibleApi = async (req, res) => {
  const query = req.query.id;

  if (parseInt(query) < 15) {
    let metadata = {}

    const attributes = [{
      "trait_type": "Event",
      "value": "First Hungarian Online NFT Exhibition"
    }];

    const description = "NFTs of the 'first Hungarian online NFT exhibition' collection organized in 2022. These are free NFTs that were raffled among the exhibition participants. Each NFT contains the work of a Hungarian NFT creator.";

    switch (query) {
      case '0':
        metadata = {
          "name": `MetaScyra`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/MetaScyra.gif`,
          "attributes": attributes
        }
        break;
      case '1':
        metadata = {
          "name": `ChaotiCats`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/ChaotiCats.gif`,
          "attributes": attributes
        }
        break;
      case '2':
        metadata = {
          "name": `Davszi`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/Davszi.gif`,
          "attributes": attributes
        }
        break;
      case '3':
        metadata = {
          "name": `EnTer369`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/EnTer369.gif`,
          "attributes": attributes
        }
        break;
      case '4':
        metadata = {
          "name": `LGACSIEVART`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/LGACSIEVART.gif`,
          "attributes": attributes
        }
        break;
      case '5':
        metadata = {
          "name": `MonikaVass`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/MonikaVass.gif`,
          "attributes": attributes
        }
        break;
      case '6':
        metadata = {
          "name": `NETZONE4`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/NETZONE4.gif`,
          "attributes": attributes
        }
        break;
      case '7':
        metadata = {
          "name": `NFT_xenia`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/NFT_xenia.gif`,
          "attributes": attributes
        }
        break;
      case '8':
        metadata = {
          "name": `PIXXTASY`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/PIXXTASY.gif`,
          "attributes": attributes
        }
        break;
      case '9':
        metadata = {
          "name": `ursumajor`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/ursumajor.gif`,
          "attributes": attributes
        }
        break;
      case '10':
        metadata = {
          "name": `VikStore`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/VikStore.gif`,
          "attributes": attributes
        }
        break;
      case '11':
        metadata = {
          "name": `zso3000`,
          "description": description,
          "image": `ipfs://QmT5k1TU9rvNq6CybARMyXVabaibCdN3HZs2kmiV2TT2Jc/zso3000.gif`,
          "attributes": attributes
        }
        break;
      default:
        metadata = {
          "name": `Default Token`,
          "description": "Update me please",
          "attributes": attributes
        }
        break;
    }
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({ error: "The collectible you requested is out of range" })
  }
}

export default collectibleApi