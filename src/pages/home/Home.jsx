import Chart from "../../components/charts/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import WidgetSm from "../../components/widgetSmall/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userData } from "../../dummyData.js"
import "./home.css"

export default function Home() {
    console.log(userData);
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg/>
            </div>
        </div>
    )
}
