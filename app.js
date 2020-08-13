const express = require('express');
const faker = require('faker');

const port = process.env.PORT || 3000
const app = express();

const FakerDataTypes = {
  'address': [
    'zipCode',
    'city',
    'cityPrefix',
    'citySuffix',
    'streetName',
    'streetAddress',
    'streetSuffix',
    'streetPrefix',
    'secondaryAddress',
    'county',
    'country',
    'countryCode',
    'state',
    'stateAbbr',
    'latitude',
    'longitude',
  ],
  'commerce': [
    'color',
    'department',
    'productName',
    'price',
    'productAdjective',
    'productMaterial',
    'product',
  ],
  'company': [
    'suffixes',
    'companyName',
    'companySuffix',
    'catchPhrase',
    'bs',
    'catchPhraseAdjective',
    'catchPhraseDescriptor',
    'catchPhraseNoun',
    'bsAdjective',
    'bsBuzz',
    'bsNoun',
  ],
  'database': [
    'column',
    'type',
    'collation',
    'engine',
  ],
  'date': [
    'past',
    'future',
    'between',
    'recent',
    'month',
    'weekday',
  ],
  'finance': [
    'account',
    'accountName',
    'mask',
    'amount',
    'transactionType',
    'currencyCode',
    'currencyName',
    'currencySymbol',
    'bitcoinAddress',
    'iban',
    'bic',
  ],
  'hacker': [
    'abbreviation',
    'adjective',
    'noun',
    'verb',
    'ingverb',
    'phrase',
  ],
  'helpers': [
    'randomize',
    'slugify',
    'replaceSymbolWithNumber',
    'replaceSymbols',
    'shuffle',
    'mustache',
    'createCard',
    'contextualCard',
    'userCard',
    'createTransaction',
  ],
  'image': [
    'image',
    'avatar',
    'imageUrl',
    'abstract',
    'animals',
    'business',
    'cats',
    'city',
    'food',
    'nightlife',
    'fashion',
    'people',
    'nature',
    'sports',
    'technics',
    'transport',
    'dataUri',
  ],
  'internet': [
    'avatar',
    'email',
    'exampleEmail',
    'userName',
    'protocol',
    'url',
    'domainName',
    'domainSuffix',
    'domainWord',
    'ip',
    'ipv6',
    'userAgent',
    'color',
    'mac',
    'password',
  ],
  'lorem': [
    'word',
    'words',
    'sentence',
    'slug',
    'sentences',
    'paragraph',
    'paragraphs',
    'text',
    'lines',
  ],
  'name': [
    'firstName',
    'lastName',
    'findName',
    'jobTitle',
    'prefix',
    'suffix',
    'title',
    'jobDescriptor',
    'jobArea',
    'jobType',
  ],
  'phone': [
    'phoneNumber',
    'phoneNumberFormat',
    'phoneFormats',
  ],
  'random': [
    'number',
    'arrayElement',
    'objectElement',
    'uuid',
    'boolean',
    'word',
    'words',
    'image',
    'locale',
    'alphaNumeric',
  ],
  'system': [
    'fileName',
    'commonFileName',
    'mimeType',
    'commonFileType',
    'commonFileExt',
    'fileType',
    'fileExt',
    'directoryPath',
    'filePath',
    'semver',
  ],
}


const bodyParser = (obj, fake_obj) => {
  let repeats = +obj['_repeats'] || 1,
      obj_arr = [],
      sorted = obj['_sorted']

  while (repeats--) {
    let fake_obj = Object()
    Object.entries(obj).forEach(
      entry => {
        let [ key, value ] = entry
        if (typeof(value) == 'object') {
          fake_obj[key] = bodyParser(value)
        } else if (!key.startsWith('_')) {
          let fakeData = faker;
          let splitArr = typeof(value) == 'string'
            ? value.split('.') : [value]
          while( splitArr.length ) {
            let dataKey = splitArr.shift()
            fakeData = fakeData.hasOwnProperty(dataKey)
              ? fakeData[dataKey] : dataKey
          }
          fake_obj[key] = typeof(fakeData) == 'function'
            ? fakeData() : fakeData
        }
      }
      )
    if (!fake_obj['id']) fake_obj['id'] = repeats
    obj_arr[repeats] = sorted
      ? Object.fromEntries(Object.entries(fake_obj).sort())
      : fake_obj
  }
  return obj["_repeats"] == 0 ? obj_arr[0] : obj_arr
}

app.use(express.json())
app.get('/', (req, res, next) => {
  res.json(FakerDataTypes)
})

app.all('/api/*', (req, res, next) => {
  let response;
  let data = {
    ...req.body,
    ...req.query
  }
  try {
    faker.locale = data.locale || 'en'
    response = bodyParser(data)
  } catch (error) {
    response = {'error': error.name}
  } finally {
    res.json(response);
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
