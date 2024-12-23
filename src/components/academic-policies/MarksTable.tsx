const MarksTable = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='table border lg:min-w-[800px] text-14 lg:text-18'>
        <thead>
          <tr className='bg-base-200 font-bold'>
            <th>S/N</th>
            <th>Academic Activities</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <ul className='list-disc'>
                <li>Class Attendance</li>
                <li>Assignment, class test, presentation, quizzes etc.</li>
              </ul>
            </td>
            <td>20%</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Midterm Examination</td>
            <td>30%</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Final Examination</td>
            <td>50%</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MarksTable
