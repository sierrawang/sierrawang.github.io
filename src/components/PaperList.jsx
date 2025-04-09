import { Paper } from "./Paper"

export const PaperList = () => {
    return (
        <div className="paper-list">
            <h1>Papers and Projects</h1>
            <Paper
                authors={"S. Wang*, J. Mitchell, C. Piech"}
                title={"AI Web Agents Can Effectively Guide Lesson Design and Predict Student Outcomes"}
                conference={"AIED 2025"}
                picUrl={"agents_graph.png"}
                // pdfUrl={'A_Large_Scale_RCT_on_Effective_Error_Messages_in_CS1___Camera_Ready.pdf'}
            />
            <Paper
                authors={"S. Wang*, T. Jefferson, C. Piech, J. Mitchell"}
                title={"The Effects of Chatbot Placement, Personification, and Functionality on Student Outcomes in a Global CS1 Course"}
                conference={"L@S 2025"}
                picUrl={"message_classifications_dist.png"}
                // pdfUrl={'A_Large_Scale_RCT_on_Effective_Error_Messages_in_CS1___Camera_Ready.pdf'}
            />
            <Paper
                authors={"I. Gupta*, Maya Bridgman, S. Wang*, J. Mitchell"}
                title={"Coding Pathfinder: A Platform for Creative, Self-Guided Mastery in Programming"}
                conference={"SIGCSE 2025"}
                // picUrl={"error_messages_pic.jpeg"}
                // pdfUrl={'A_Large_Scale_RCT_on_Effective_Error_Messages_in_CS1___Camera_Ready.pdf'}
            />
            <Paper
                authors={"S. Wang*, J. Mitchell, C. Piech"}
                title={"A Large Scale RCT on Effective Error Messages in CS1"}
                conference={"SIGCSE 2024"}
                award={"Best Paper Award"}
                picUrl={"error_messages_pic.jpeg"}
                pdfUrl={'A_Large_Scale_RCT_on_Effective_Error_Messages_in_CS1___Camera_Ready.pdf'}
            />
            <Paper
                authors={"S. Wang*, J. Mitchell, N. Haber, C. Piech"}
                title={"Math IDE: A Platform for Creating with Math"}
                conference={"SIGCSE 2024"}
                picUrl={"math_pic.jpeg"}
                pdfUrl={'Math_IDE_Poster_Submission.pdf'}
            />
            <Paper
                authors={"A. Malik*, J. Woodrow*, B. Capoor, T. Jefferson, M. Li, S. Wang, P. Wei, D. Demszky, J. Langer-Osuna, J. Zelenski, M. Sahami, C. Piech"}
                title={"Code in Place 2023: Understanding Learning and Teaching at Scale through a Massive Global Classroom"}
                picUrl={"codeinplace_pic.jpg"}
                pdfUrl={'https://piechlab.stanford.edu/assets/papers/codeinplace2023.pdf'}
            />
            <Paper
                authors={"S. Wang*, F. Bakir, T. Ekaireb, J. Pearson, C. Krintz, R. Wolski"}
                title={"MSDBench: Understanding the Performance Impact of Isolation Domains on Microservice-based IoT Deployments"}
                conference={"Bench 2022"}
                award={"Tony Hey Best Student Paper Award"}
                picUrl={"microservices_pic.jpeg"}
                pdfUrl={'https://sites.cs.ucsb.edu/~ckrintz/papers/bench22.pdf'}
            />
            <Paper
                authors={"F. Bakir*, S. Wang, T. Ekaireb, J. Pearson, C. Krintz, R. Wolski"}
                title={"Ambience: An Operating System for IoT Microservices"}
                conference={"Journal of Edge Computing"}
                // picUrl={"microservices_pic.jpeg"}
                pdfUrl={'https://acnsci.org/journal/index.php/jec/article/view/786'}
            />
        </div>
    )

}