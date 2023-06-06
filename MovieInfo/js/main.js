$(document).ready(()=>{
	$('#searchForm').on('submit', (e)=>{
		let searchValue = $('#searchText').val();
		getMovies(searchValue);
		e.preventDefault();
	});
});

function(searchValue){
	
}