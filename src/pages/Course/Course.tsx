import { CourseWrapper, Title, Li, Ul } from "./styles";


function Course() {
    return(
        <CourseWrapper>
            <Title>React Lessons</Title>
            <Ul>
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
            </Ul>
        </CourseWrapper>
    )
}

export default Course;