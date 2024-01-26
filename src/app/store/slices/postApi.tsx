/*yhe main rtk query porpuse is to fetchh data at onece and then use 
this data to multiple components not to fetch it again for every process
 */
//we gona me the slice for the first, this is
//this is most of the data directly copy from the text

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//now export the slice
/*now this slice is bacily consit of the three things which is
reducerpath joky name hoga
basequery:fetchBaseQuery({baseUrl:'/url}) ismay vo url oga jaha sa data fetch krna h
then endpoit: builder this is the main function in which we gona make the 
make the query and setig type or every thing we gona wnate mutaion query etc 
**the important thing hee we add the tagstoo*/
/*there is another thing that we can do in rtk query which is transform that query results 
that we fetch basicaly this transform consist of three perameter res,meta,arg then function
ransformResponce:[res,meta,arg]=>{
  return
} */
export const postApi = createApi({
  reducerPath: "postApi",
  tagTypes: ["hello","update"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    /*now here we gona make all all wanted queries
    first query name then : builder . then what u wanted be mutation is for
    manupullation data and query is just for get data .query({
      then query from which data of api*/
    getAllpost: builder.query({
      query: () => 'users',
      //now they fetch me the users data
      //now heree is the importantant transforming response of query
      //ismy jo bi item hum vaha sa isky props ma pass karyn gy vo isky arg ma ahy gi
      transformResponse:(res:any,meta,arg)=>{
        if(arg) return res.filter((item:any)=>item.id<arg)
        return res
      },

      /*the most main thing to learn is that when we performe curd then
      we must hae to update the parent fetch so we go for tags 
      that if we go this then updated theparent fetch provided tage
       is for parent update query*/
      providesTags: ["hello"]
    }),
    //now creating another query
    getUserById: builder.query({
      //query()=>"Users/2"
      query: (id) => `users/${id}`,
      //now they fetch me the user2 id data
      //now just export it
      //i can also pasing id to is props
      providesTags:["update"]
    }),
    //now creting a query using mutation to post data
    createPost: builder.mutation({
      query: (data) => ({
        url: 'users',
        method: "POST",
        //and passing the props of data that we gona post to that api
        body: data

      }),
      //we use invalidete to tell them that after this performe this tage query
      invalidatesTags: ["hello"]
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `users/${data.id}`,
        method: "PATCH",
        body: data

      }),
      invalidatesTags:["update"]

    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
        body: id

      })

    })


  })
})

//now fr making the query export we gona create in such a way
// that first write use then end point query namme the equal to the function name
export const { useGetAllpostQuery,
  useGetUserByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation } = postApi

//after creating the slice we jumped to the store to add one more state


