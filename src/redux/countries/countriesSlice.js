import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://restcountries.com/v3.1/all';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      return error;
    }
  },
);

const initialState = {
  countries: [],
  loading: 'idle', // 'pending' | 'succeeded' | 'failed'
  error: undefined,
};

export const countrySlice = createSlice({
  name: 'countris',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = 'pending';
    }).addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      const countriesData = action.payload.map((country) => ({
        countryId: uuidv4(),
        name: country.name.common,
        officialName: country.name.official,
        capital: country.capital,
        region: country.region,
        languages: country.languages,
        startOfWeek: country.startOfWeek,
        population: country.population,
        continents: country.continents,
        coatOfArms: country.coatOfArms.png,
        flagSmall: country.flag,
        flag: country.flags.png,
        capitalLocation: country.capitalInfo.latlng,
        lat: country.latlng[0],
        long: country.latlng[1],
        langugage: country.languages,
        subregion: country.subregion,
        currency: country.currencies,
        timezones: country.timezones[0],
        area: country.area,
        flagAlt: `Flag of ${country.name.common}`,
      }));
      state.countries = countriesData;
    }).addCase(fetchCountries.rejected, (state, action) => {
      state.loading = 'failed';
      state.error = action.error.message;
    });
  },
});

export default countrySlice.reducer;
