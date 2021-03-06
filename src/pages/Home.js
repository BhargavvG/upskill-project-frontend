import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { FiSearch } from 'react-icons/fi'
import newsObj from '../services/news.api'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import Loading from '../components/Loading'

export default function Home() {
  const [categories, setCategories] = useState([
    { title: 'Top Headlines', key: 'top-headlines' },
    { title: 'Sports', key: 'sports' },
    { title: 'Political', key: 'political' },
    { title: 'Market', key: 'market' },
    { title: 'Entertainment', key: 'entertainment' },
    { title: 'Tech', key: 'tech' },
  ])
  const [allNews, setAllNews] = useState([])
  const [pageNews, setPageNews] = useState([])
  const [selectedPage, setSelecetedPage] = useState(0)
  const [totalPages, setTotalpages] = useState(0)
  const [perPage, setPerPage] = useState(12)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setPageNews(allNews.slice((selectedPage + 1) * perPage, (selectedPage + 2) * perPage))
    setLoading(false)
  }, [selectedPage, allNews])

  useEffect(() => {
    setTotalpages(Math.ceil(allNews.length / perPage))
  }, [allNews])
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [searched, setSearched] = useState('')
  const [fields, setFields] = useState({})
  const selectCategory = (category) => {
    setSelectedCategory(category)
    setSearched(category.key)
  }

  const handleInput = (e) => {
    if (e.key === 'enter') {
      handleSearch()
    }
  }

  const handleSearch = () => {
    setSearched(fields['search'])
    setSelectedCategory({})
  }

  const handleChange = (e) => {
    let temp = fields
    temp[e.target.name] = e.target.value
    setFields({ ...temp })
  }
  useEffect(()=>{
    setSearched(selectedCategory.key)
  },[selectedCategory])

  useEffect(async () => {
    let data = await newsObj.getAllNews({ q: searched })
    setAllNews(data.data.articles)
  }, [searched, selectedCategory])

  // #90D3CF4D
  return (
    <div className="mx-auto max-w-[1440px] mb-4">
      <section className="flex flex-col mx-auto text-[#594636] my-4">
        <div className="flex w-auto">
          {/* <div className="px-10 py-3 border rounded-tl-full" style={{ boxShadow: '-2px -2px 2px 1px rgb(0 0 0 / 5%)' }}>
            Today's
          </div> */}
          <div className="px-10 border rounded-tl-full" style={{ boxShadow: '-2px -2px 2px 1px rgb(0 0 0 / 5%)' }}>
            <input
              className="w-full h-full focus-visible:outline-0"
              placeholder="Search for more specific"
              name="search"
              onKeyPress={(e) => handleInput(e)}
              onChange={handleChange}
            ></input>
          </div>
          <div
            className="px-4 py-3 pr-10 text-lg border rounded-tr-full cursor-pointer"
            style={{ boxShadow: '2px -2px 2px 1px rgb(0 0 0 / 5%)' }}
            onClick={handleSearch}
          >
            <FiSearch />
          </div>
        </div>
        <div className="flex w-auto">
          {categories.map((item, i) => {
            return (
              <buton
                className={`border border-[#0000001a]  px-10 py-4 text-lg ${
                  selectedCategory.key === item.key ? 'bg-[#90D3CF]' : 'bg-white'
                } hover:bg-[#90D3CF] cursor-pointer ${
                  i === 0 ? 'rounded-bl-full' : i === categories.length - 1 ? 'rounded-r-full' : null
                }`}
                key={i}
                style={{ boxShadow: '0 2px 2px 1px #0000001a' }}
                onClick={() => selectCategory(item)}
              >
                {item.title}
              </buton>
            )
          })}
        </div>
      </section>

      {loading ? 
      <Loading></Loading>
      :
        <div className="flex flex-wrap gap-4 my-6">
          {pageNews.map((item, i) => {
            return <NewsCard news={item} key={i}></NewsCard>
          })}
        </div> }

        {/* Pagination  */}
        <div className="flex items-center justify-end w-full gap-4">
          <button
            onClick={() => {
              if (selectedPage > 0) setSelecetedPage(selectedPage - 1)
            }}
          >
            <MdNavigateBefore></MdNavigateBefore>
          </button>
          <span className="p-2 bg-white">{selectedPage + 1}</span>
          <button
            onClick={() => {
              if (selectedPage < totalPages) setSelecetedPage(selectedPage + 1)
            }}
          >
            <MdNavigateNext></MdNavigateNext>
          </button>
        </div>
    </div>
  )
}
