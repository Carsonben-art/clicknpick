import "./featuredInfo.css";

import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CategoryIcon from '@mui/icons-material/Category';
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Order</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">324</span>
          <span className="featuredMoneyRate">
             <MilitaryTechIcon  className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">Total Orders Available</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Ksh 423,415</span>
          <span className="featuredMoneyRate">
             <MonetizationOnIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Total Revenue</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">525</span>
          <span className="featuredMoneyRate">
             <CategoryIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Total Posted Products</span>
      </div>
    </div>
  );
}
