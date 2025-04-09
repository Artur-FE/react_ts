import { CourseWrapper, Title, ListItem } from "./styles";
import { lessonsData } from "./data";
import { v4 } from "uuid";


function Course() {
const lessons = lessonsData.map((lesson:string)=> {
    return <ListItem key={v4()}>{lesson}</ListItem>
})

    return(
        <CourseWrapper>
            <Title>React Lessons</Title>
            {lessons}
            {/* <Ul>
            <Li>Props_and_State</Li>
            <Li>Object_Types,_export,_import</Li>
            <Li>Controlled_and_uncontrolled_components</Li>
            <Li>Children,_Control_components</Li>
            <Li>Styling_components</Li>
            <Li>Global_Styles,_styles_templates</Li>
            <Li>useEffect,_axios</Li>
            <Li>server_requests,_axios</Li>
            <Li>Formik,_Yup</Li>
            <Li>Routing</Li>
            </Ul> */}
        </CourseWrapper>
    )
}

export default Course;