import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyConatiner">
                    <span className="featuredMoney">$4,145</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward/></span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyConatiner">
                    <span className="featuredMoney">$2,145</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward/></span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyConatiner">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">+2.4 <ArrowUpward/></span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
        </div>
    )
}
