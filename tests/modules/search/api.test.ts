import {Api} from '../../../lib/modules/search/api';
import {HttpClient} from '../../../lib/modules/httpClient';

jest.mock('../../../lib/modules/httpClient')

const httpClient = new HttpClient({v4AccessToken: 'test_token'})
const searchApi = new Api(httpClient)
const response = [{name: 'foo'}];

beforeEach(() => {
    jest.clearAllMocks()
})

test('Test Api getVersion returns v3', () => {
    expect(searchApi.getVersion()).toBe('3')
})

test('Test companies constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    mockHttpClientGet.mockResolvedValue(response)
    const params = {
        query: 'wat',
        page: 4
    }
    searchApi.companies(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/company', params)
})

test('Test collections constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    mockHttpClientGet.mockResolvedValue(response)
    const params = {
        query: 'wat',
        page: 4,
        language: 'en'
    }
    searchApi.collections(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/collection', params)
})

test('Test keywords constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    mockHttpClientGet.mockResolvedValue(response)
    const params = {
        query: 'wat',
        page: 4
    }
    searchApi.keywords(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/keyword', params)
})

test('Test movies constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    const params = {
        query: 'wat',
        page: 4,
        language: 'en',
        region: 'US',
        include_adult: false,
        year: 2001,
        primary_release_year: 1971
    }
    searchApi.movies(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/movie', params)
})

test('Test multi constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    const params = {
        query: 'wat',
        page: 4,
        language: 'en',
        region: 'US',
        include_adult: false
    }
    searchApi.multi(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/multi', params)
})

test('Test people constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    const params = {
        query: 'wat',
        page: 4,
        language: 'en',
        region: 'US',
        include_adult: false
    }
    searchApi.people(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/person', params)
})

test('Test tvShows constructs correct path with correct params and returns correct data', () => {
    const mockHttpClientGet = jest.spyOn(httpClient, 'get')
    const params = {
        query: 'wat',
        page: 4,
        language: 'en',
        first_air_date_year: 1971,
        include_adult: false
    }
    searchApi.tvShows(params).then(data => expect(data).toEqual(response));
    expect(mockHttpClientGet).toHaveBeenCalledTimes(1)
    expect(mockHttpClientGet).toHaveBeenCalledWith('/3/search/tv', params)
})