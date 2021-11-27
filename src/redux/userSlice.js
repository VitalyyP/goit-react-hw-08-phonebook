import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://619826b0164fa60017c22f8a.mockapi.io' }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'user/current',
      providesTags: ['User'],
    }),
    addUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['User'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: contact.name,
          phone: contact.phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Contacts'],
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://619826b0164fa60017c22f8a.mockapi.io' }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: contact.name,
          phone: contact.phone,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } =
  contactsApi;
