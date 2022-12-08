
![](./assets/img/appDesktop2.png)


# Custom Table

See the live version of [Custom Table](https://devmentor.pl).


Custom Table Library is a fully reusable React component that allows users to create light and stylish table with several customization options available.

Custom element enables you to:
- Change displayed rows per page,
- Change page,
- Filter by any column,
- Filter globally,
- Sort ascending & descending by column,
- Use table with any data you want.

You can customize:
- Which filters to use,
- Title of your table,
- Initial rows per page,
- Rows per page options to select,
- Data you want to use with the table.


When creating the project, I was inspired by solutions such as: [material-table](https://material-table.com/#/) & [MUI table](https://mui.com/material-ui/react-table/)

&nbsp;
 
## 💡 Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

&nbsp;
 
## 🔗 See also

Are you interested in **React** and **Styled components**? See my other project -> [Neuromorphic Form](https://github.com/MateuszSuplewski/Neuromorphic-Multistep-Form).

&nbsp;
 
## 💿 Installation & Run

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Having them installed, type into the terminal: `npm i`.

Your app is now ready to start - Use terminal and type: `npm start`

Custom Table should be running on [`http://localhost:3000`](http://localhost:3000)

### Customization | Usage
```javascript
    <CustomTableContainer
      title={'Basic example of table'}
      columns={columns}
      data={data}
      initialLimit={3}
      filtering={'bothFilters'}
      options={[1, 2, 3, 5]}
    />
```
- Title - Pass text

- Columns and data - Change `tableData` file content

- Initial limit - Declare number

- Filtering - Choose between : | bothFilters | globalFilter | columnFilter |

- Options - Pass array with numbers


&nbsp;
 
## 🤔 Solutions provided in the project

 - ### Product testing | JEST & React Testing Library

 Testing is important process, because it forces us to create applications according to the rules that we gave in tests.
 This often leads to fewer defects or bugs in the code.

 With `React testing library` we are able to test how component is rendered and how it behaves
 under various user actions.

 ```javascript
  it('Should render column sorter', () => { // render
    setup()
    expect.assertions(3)

    const sortButtons = screen.getAllByTestId('sortIcon--asc')
    expect(sortButtons).toHaveLength(2)
    sortButtons.forEach(button => expect(button).toBeInTheDocument())
  })
 ```

 ```javascript
  it('Should filter data if columnFilter input passed', () => { // action
    setup()
    expect.assertions(5)

    const columnFilter = screen.getByPlaceholderText('Filter by population')
    userEvent.type(columnFilter, '60483973')
    expect(columnFilter).toHaveValue('60483973')

    expect(screen.getByText('Italy')).toBeInTheDocument()
    expect(screen.getByText('60483973')).toBeInTheDocument()

    expect(screen.queryByText('India')).not.toBeInTheDocument()
    expect(screen.queryByText('1324171354')).not.toBeInTheDocument()
  })
 ```
 
 &nbsp;

- ### Custom hooks
Table gives us the ability to filter and sort, the presented solution uses custom hooks created especially for the project: `useSort`, `useGlobalFilter` and `useColumnsFilter`.

Thanks to the use of Hooks, our other projects will be able to use the same solutions without any problems, which will significantly shorten the time of writing new projects!

```javascript
 import { useState } from 'react'

 const useGlobalFilter = (initialData) => {
   const [filterPhrase, setFilterPhrase] = useState('')

   const filterCell = (cell) => cell.toUpperCase().includes(filterPhrase.toUpperCase())

   const filterByPhrase = (data = initialData) => {
     const dataFilteredByPhrase = data.filter((row) => {
       const rowCellsContent = Object.values(row)
       return rowCellsContent.some(filterCell)
     })
     return dataFilteredByPhrase
   }

   return [filterPhrase, setFilterPhrase, filterByPhrase]
 }

 export default useGlobalFilter
``` 


 &nbsp;

- ### Conditional component rendering

Using conditional rendering to make our components even more flexible.
```javascript
const TableCell = ({ style, align, type = 'data', children, ...otherProps }) => {
  const cellType = {
    data: SDataCell,
    head: SHeaderCell
  }
  const STableCell = cellType[type]

  return (
    <STableCell
      style={style}
      align={align}
      {...otherProps}
    >
      {children}
    </STableCell>
  )
}
```
 &nbsp;



## 💭 Application development plans

I would like to extend project functionality by adding more options to customize table such as:
- Uploading your own styles to suit your taste,
- Hiding chosen column to focus on data you need,
- Selecting rows.



&nbsp;

## 🙋‍♂️ Feel free to contact me
In case you found any/more issues that could've been solved, you have ideas how we can create something more complex or just simply want to chat, then just let me know on:
[Linkedin](https://www.linkedin.com/in/mateusz-suplewski-705017227/) or via Email : Matx3582@gmail.com
&nbsp;

## 👏 Credits
Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) & [Akademia Samouka](https://akademiasamouka.pl/) - for providing me with this task.


&nbsp;