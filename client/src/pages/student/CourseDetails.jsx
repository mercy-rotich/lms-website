import React, { useContext, useEffect, useState } from 'react'
import {useParams} from  'react-router-dom'
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';

const CourseDetails = () => {


  const {id} = useParams()

  const [courseData,setCourseData] = useState(null)

  const {allCourses} = useContext(AppContext)

  const fetchCourseData = async  ()=>{
   const findCourse= allCourses.find(course => course._id === id)
   setCourseData(findCourse)
  }

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      fetchCourseData();
    }
  }, [allCourses, id]); // Add dependencies


  return courseData ? (
 <>
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 md:pt-30 pt-20 text-left'>

      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>
      {/* left column */}
      <div>
        <h1>{courseData.courseTitle}</h1>
        <p>{courseData.courseDescription}</p>
      </div>
      {/* right column */}

    </div> 
    </> 
  ) : <Loading/>
}

export default CourseDetails
