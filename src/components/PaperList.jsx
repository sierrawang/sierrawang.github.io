import { Paper } from "./Paper"

export const PaperList = () => {


    return (
        <div className="paper-list">
            <Paper
                authors={"S. Wang*, J. Mitchell, C. Piech"}
                title={"A Large Scale RCT on Effective Error Messages in CS1"}
                conference={"SIGCSE 2024"}
                award={"Best Paper Award"}
                picUrl={"error_messages_pic.jpeg"}
             />
            <Paper
                authors={"S. Wang*, J. Mitchell, N. Haber, C. Piech"}
                title={"Math IDE: A Platform for Creating with Math"}
                conference={"SIGCSE 2024"}
                picUrl={"math_pic.jpeg"}
             />
            <Paper
                authors={"S. Wang*, F. Bakir, T. Ekaireb, J. Pearson, C. Krintz, R. Wolski"}
                title={"MSDBench: Understanding the Performance Impact of Isolation Domains on Microservice-based IoT Deployments"}
                conference={"Bench 2022"}
                award={"Tony Hey Best Student Paper Award"}
                picUrl={"microservices_pic.jpeg"}
             />
        </div>
    )

}