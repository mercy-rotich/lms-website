import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const currency = import.meta.env.VITE_CURRENCY // Fixed typo

    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)

    // Fetch all courses
    const fetchAllCourses = () => { // Removed async since not needed
        console.log('Setting courses:', dummyCourses); // Debug line
        setAllCourses(dummyCourses)
    }

    // Function to create average rating of course
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }
    
    // function to calculate course chapter time

    const calculateChapterTime = (chapter)=>{
        let time= 0
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)

        return humanizeDuration(time *60 *1000,{units:["h","m"]})
    }
    //function to calculate course duration
    const calculateCourseDuration =(course)=>{
        let time =0 

        course.courseContent.map((chapter)=> chapter.chapterContent.map(
            (lecture)=> time += lecture.lectureDuration
        ))

        return humanizeDuration(time *60 *1000,{units:["h","m"]})
    }



    //function to calculate the number of lectures in the course


    const calculateNoOfLectures =(course)=>{
        let totalLectures = 0;
        course.courseContent.forEach(chapter =>{
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        });

        return totalLectures
    }


    useEffect(() => {
        fetchAllCourses()
    }, [])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setIsEducator,calculateNoOfLectures,calculateCourseDuration,calculateChapterTime
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}