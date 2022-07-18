const request = require('supertest')
const app = require('../app')

const mockLocation =
{
    "status": "success",
    "country": "Argentina",
    "countryCode": "AR",
    "region": "B",
    "regionName": "Buenos Aires",
    "city": "Florencio Varela",
    "zip": "1888",
    "lat": -34.8136,
    "lon": -58.3311,
    "timezone": "America/Argentina/Buenos_Aires",
    "isp": "Telefonica de Argentina",
    "org": "Telefonica de Argentina",
    "as": "AS22927 Telefonica de Argentina",
    }

describe('get location', () => {
  it('shoud return location and check property name', async () => {
    const res = await request(app)
      .get('/api/location')
    expect(res.statusCode).toEqual(200)
    expect(mockLocation).toHaveProperty('status')
    expect(mockLocation).toHaveProperty('country')
    expect(mockLocation).toHaveProperty('countryCode')
    expect(mockLocation).toHaveProperty('region')
    expect(mockLocation).toHaveProperty('regionName')
    expect(mockLocation).toHaveProperty('city')
    expect(mockLocation).toHaveProperty('zip')
    expect(mockLocation).toHaveProperty('lat')
    expect(mockLocation).toHaveProperty('lon')
    expect(mockLocation).toHaveProperty('timezone')
    expect(mockLocation).toHaveProperty('isp')
    expect(mockLocation).toHaveProperty('org')
    expect(mockLocation).toHaveProperty('as')
  })
})

describe('get current city', () => {
    it('shoud return current location data', async () => {
      const res = await request(app)
        .get('/api/current')
      expect(res.statusCode).toEqual(200)
    })
  })


describe('get city paris', () => {
    it('shoud return paris data', async () => {
      const res = await request(app)
        .get('/api/current/Paris')
      expect(res.statusCode).toEqual(200)
    })
  })

describe('get forecast currenty city', () => {
    it('shoud return forecast', async () => {
      const res = await request(app)
        .get('/api/forecast')
      expect(res.statusCode).toEqual(200)
    })
})

