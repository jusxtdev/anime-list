import { useState } from "react"

const BASE_URL = 'https://kitsu.io/api/edge/'

export const getTop5TrendingAnime = async (params) => {
    const response = await fetch(`${BASE_URL}/trending/anime?limit=5`)
    
    if (!response.ok){
        throw new Error("Failed to fetch trending Anime")
    }
    
    const data = await response.json()
    return data.data
}