export const getPeople = people => ({
  type: 'GET_PEOPLE',
  people
});

export const removePeople = name => ({
  type: "REMOVE_PEOPLE",
  name
})

export const getPeopleRequest =  () => {
    return async dispatch => {
        try {
            const apiUrl = 'https://swapi.dev/api/people/';
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => data.results)
                .then((data) => dispatch(getPeople(data)));
        }
        catch(e){
            console.log(e)
        }
    }
}
