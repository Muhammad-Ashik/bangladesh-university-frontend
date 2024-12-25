export default function GradesTable() {
  return (
    <div className='overflow-x-auto'>
      <table className='table border lg:min-w-[800px] text-14 lg:text-18 text-secondary font-bold'>
        <thead>
          <tr className='bg-base-200 text-14 sm:text-16 font-bold'>
            <th>Numerical Grade</th>
            <th>Letter Grade</th>
            <th>Grade Point</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>80-100</th>
            <td>A+</td>
            <td>4.00</td>
          </tr>
          <tr>
            <th>75-79</th>
            <td>A</td>
            <td>3.75</td>
          </tr>
          <tr>
            <th>70-74</th>
            <td>A-</td>
            <td>3.50</td>
          </tr>
          <tr>
            <td>65-69</td>
            <td>B+</td>
            <td>3.25</td>
          </tr>
          <tr>
            <td>60-64</td>
            <td>B</td>
            <td>3.00</td>
          </tr>
          <tr>
            <td>55-59</td>
            <td>B-</td>
            <td>2.75</td>
          </tr>
          <tr>
            <td>50-54</td>
            <td>C+</td>
            <td>2.50</td>
          </tr>
          <tr>
            <td>45-49</td>
            <td>C</td>
            <td>2.25</td>
          </tr>
          <tr>
            <td>40-44</td>
            <td>C-</td>
            <td>2.00</td>
          </tr>
          <tr>
            <td>Less than 40</td>
            <td>F</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
