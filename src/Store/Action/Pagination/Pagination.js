export const SET_PAGINATION_DATA = 'SET_PAGINATION_DATA'

export const setPagination = (data) => (
    { type: SET_PAGINATION_DATA, value: data }
);

export const CreatePagination = (data, count ) =>{
    let n= count;

    const pageSize = Math.ceil(data.length / n);
       
    let paginate = Array.from({ length: pageSize }, (_, index) => {
      const start = index * n;
      return data.slice(start, start + n);
    });
    var json = {
      data : data,
      paginate : paginate,
      pagination:{
        current : 1,
        total : 0
      },
    }
  return json;
}