import React, { Component, useEffect, useState } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import config from '../../../config';


const { api } = config

export default function Discover(props) {
  const [token, setToken] = useState(null);
  const [newReleases, setNewReleases] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [categories, setCategories] = useState([])
  const url = new URL(window.location.href.replace('#', '?'));
  const urlToken = url.searchParams.get('access_token');

  const spotifyBrowseEndpoint = api.baseUrl + '/browse'
  const headers = {
    headers: {
      'Authorization': 'Bearer ' + urlToken,
    }
  }

  useEffect(() => {
    if (urlToken) {
      setToken(urlToken);
      async function fetchData() {
        const newReleasesResponse = await fetch(spotifyBrowseEndpoint + '/new-releases', headers)
        const playlistsResponse = await fetch(spotifyBrowseEndpoint + '/featured-playlists', headers)
        const categoriesResponse = await fetch(spotifyBrowseEndpoint + '/categories', headers)

        const newReleasesData = await newReleasesResponse.json()
        const playlistData = await playlistsResponse.json()
        const categoriesData = await categoriesResponse.json()

        setNewReleases(newReleasesData.albums.items)
        setPlaylists(playlistData.playlists.items)
        setCategories(categoriesData.categories.items)
      }
      fetchData()
    }
  }, [urlToken, token])

  if (token || urlToken) {
    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    )
  } else {
    window.location = api.authUrl
    return null;
  }
}
