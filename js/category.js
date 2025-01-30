// import
import { displayTodo } from '/js/todo.js'

// if category selected changed, assign value of input category (newCategory) from category.value
category.addEventListener('change', () => (newCategory.value = category.value))

export function updateCategory(newFilterName) {
	// selector
	let containerFilter = document.querySelector('.category-filter')

	// get dataCategory from localStorage
	let dataCategory = JSON.parse(localStorage.getItem('category')) || []

	// if newFilterName exist
	if (newFilterName) {
		// add newFilterName to dataCategory
		dataCategory.push(newFilterName)

		// and save using localStorage
		localStorage.setItem('category', JSON.stringify(dataCategory))

		// assign dataCategory to single value because if newFilterName is exist user want add onli this filter not re display all
		dataCategory = [newFilterName]
	}

	dataCategory.forEach(item => {
		// create innerHTML content
		const option = `<option value="${item}">${item}</option>`
		const filter = `<button value="${item}">${item}</button>`

		// if category have child, append child (using +=, bacause option is note elemen) else asiggn (=)
		category.innerHTML ? (category.innerHTML += option) : (category.innerHTML = option)

		// containerFilter append child filter
		containerFilter.innerHTML += filter
	})

	// declaration filterCategories after date category printed on the document
	let filterCategories = document.querySelectorAll('.category-filter > *')

	// forEach filterCategories to get each item
	filterCategories.forEach(item => {
		// if item clicked
		item.addEventListener('click', () => {
			// forEach filterCategories to remove classList 'active'
			filterCategories.forEach(f => f.classList.remove('active'))

			// remove atribute 'new-count'
			item.removeAttribute('new-count')

			// and add classList 'active'
			item.classList.add('active')

			// run displayTodo with name filter (item.value)
			displayTodo(item.value)
		})
	})
}
