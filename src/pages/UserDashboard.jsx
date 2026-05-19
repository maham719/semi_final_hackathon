import React, { useEffect,useState } from 'react'
import Header from '../components/Header';

const UserDashboard = () => {
    
useEffect(() => {

 setTimeout(() => {
    window.HSStaticMethods?.autoInit();
  }, 0);

  const options = {
    chart: {
      height: 182,
      width: 182,
      type: "donut",
      offsetX: 10,
      parentHeightOffset: 0
    },
    labels: ["Discount", "Profit", "Sale"],
    series: [14987, 1735, 11548],
    colors: [
      "var(--color-primary)",
      "var(--color-success)",
      "var(--color-warning)"
    ],
    stroke: {
      width: 4,
      colors: ["var(--color-base-200)"]
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: { show: false },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "83%",
          labels: {
            show: true,
            value: {
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--color-base-content)",
              formatter: (val) => "$" + parseInt(val)
            },
            total: {
              show: true,
              label: "percentage",
              formatter: () => "82%"
            }
          }
        }
      }
    }
  };

  const chartElement = document.querySelector("#revenue-chart");

  const chart = new ApexCharts(chartElement, options);

  chart.render();

  // CLEANUP
  return () => {
    chart.destroy();
  };

}, []);
  return (
  <div className="bg-base-200 flex min-h-screen flex-col">
  {/* ---------- HEADER ---------- */}
  <Header/>
  {/* Search Dropdown Content  */}
  
  {/* Activity Drawer Content  */}
  
  {/* ---------- END HEADER ---------- */}
  {/* ---------- MAIN SIDEBAR ---------- */}
  <aside
    id="layout-toggle"
    className="overlay overlay-open:translate-x-0 drawer drawer-start inset-y-0 start-0 hidden h-full [--auto-close:lg] sm:w-75 lg:z-50 lg:block lg:translate-x-0 lg:shadow-none"
    aria-label="Sidebar"
    tabIndex={-1}
  >
    <div className="drawer-body border-base-content/20 h-full border-e p-0">
      <div className="flex h-full max-h-full flex-col">
        <button
          type="button"
          className="btn btn-text btn-circle btn-sm absolute end-3 top-3 lg:hidden"
          aria-label="Close"
          data-overlay="#layout-toggle"
        >
          <span className="icon-[tabler--x] size-5" />
        </button>
        <div className="text-base-content border-base-content/20 flex flex-col items-center gap-4 border-b px-4 py-6">
          <div className="avatar">
            <div className="size-17 rounded-full">
              <img
                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png"
                alt="avatar"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-base-content text-lg font-semibold">
              Mitchell Johnson
            </h3>
            
          </div>
          <div className="flex gap-3">
            <a href="#" className="link size-4.5" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-4.5" />
            </a>
            <a href="#" className="link size-4.5" aria-label="Instagram Link">
              <span className="icon-[tabler--brand-instagram] size-4.5" />
            </a>
            <a href="#" className="link size-4.5" aria-label="X Link">
              <span className="icon-[tabler--brand-twitter] size-4.5" />
            </a>
            <a href="#" className="link size-4.5" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-4.5" />
            </a>
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <ul className="menu menu-sm gap-1 px-4">
            {/* Dashboard */}
            <li className="mt-2.5">
              <a href="#" className="menu-active px-2">
                <span className="icon-[tabler--dashboard] size-4.5" />
                <span className="grow">Dashboard</span>
                
              </a>
            </li>
            <li className="text-base-content/50 mt-2.5 p-2 text-xs uppercase">
              Pages
            </li>
            {/* Content Performance */}
            <li>
              <a href="#" className="px-2">
                <span className="icon-[tabler--file-invoice] size-4.5" />
                Upload Notes
              </a>
            </li>
            {/* Audience Insights */}
            <li>
              <a href="#" className="px-2">
                <span className="icon-[tabler--users] size-4.5" />
                Ai Summaries
              </a>
            </li>
            {/* Engagement Metrics */}
            <li>
              <a href="#" className=" px-2">
                <span className="icon-[tabler--chart-pie-2] size-4.5" />
               Quiz Generator
              </a>
            </li>
          
            {/* Competitor Analysis */}
            <li>
              <a href="#" className="px-2">
                <span className="icon-[tabler--arrows-left-right] size-4.5" />
                History
              </a>
            </li>
            {/* Campaign Tracking */}
            <li>
              <a href="#" className="px-2">
                <span className="icon-[tabler--clock] size-4.5" />
                Analytics
              </a>
            </li>
            {/* Sentiment Analysis */}
            <li>
              <a href="#" className="px-2">
                <span className="icon-[tabler--file-digit] size-4.5" />
                Profile
              </a>
            </li>
            {/* Influencer */}
            
       
         
         
            
         
          </ul>
        </div>
     
      </div>
    </div>
  </aside>
  {/* ---------- END MAIN SIDEBAR ---------- */}
  <div className="flex grow flex-col lg:ps-75">
    {/* ---------- MAIN CONTENT ---------- */}
    <main className="mx-auto w-full max-w-7xl flex-1 space-y-6 p-6">
      {/* Stats */}
      <div className="shadow-base-300/10 rounded-box bg-base-100 flex gap-4 p-6 shadow-md max-xl:flex-col">



      
        <div className="flex flex-1 gap-4 max-sm:flex-col">
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--eye] size-5" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Total Uploads</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                17,356
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-success inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-up] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  EPC: 308.20
                </span>
              </div>
            </div>
          </div>
          <div className="divider sm:divider-horizontal" />
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--mouse] size-6" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Ai Summaries</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                2,784
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-error inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-down] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  Related Value: 77,359
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="divider xl:divider-horizontal" />
        <div className="flex flex-1 gap-4 max-sm:flex-col">
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--chart-bar] size-6" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Study Streak</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                $1,658
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-success inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-up] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  Related Value: 77,359
                </span>
              </div>
            </div>
          </div>
          <div className="divider sm:divider-horizontal" />
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--currency-dollar] size-6" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Study Hours</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                $8,759
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-success inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-up] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  Related Value: 13.85
                </span>
              </div>
            </div>
          </div>

       
        </div>
      </div>



       <div className="shadow-base-300/10 rounded-box bg-base-100 flex gap-4 p-6 shadow-md max-xl:flex-col">



      
        <div className="flex flex-1 gap-4 max-sm:flex-col">
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--eye] size-5" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Topics Completed</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                17,356
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-success inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-up] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  EPC: 308.20
                </span>
              </div>
            </div>
          </div>
          <div className="divider sm:divider-horizontal" />
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--mouse] size-6" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Ai Summaries</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                2,784
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-error inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-down] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  Related Value: 77,359
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="divider xl:divider-horizontal" />
        <div className="flex flex-1 gap-4 max-sm:flex-col">
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--chart-bar] size-6" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Study Streak</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                $1,658
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-success inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-up] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  Related Value: 77,359
                </span>
              </div>
            </div>
          </div>
          <div className="divider sm:divider-horizontal" />
          <div className="flex flex-1 flex-col gap-4">
            <div className="text-base-content flex items-center gap-2">
              <div className="avatar avatar-placeholder">
                <div className="bg-base-200 rounded-field size-9">
                  <span className="icon-[tabler--currency-dollar] size-6" />
                </div>
              </div>
              <h5 className="text-lg font-medium">Study Hours</h5>
            </div>
            <div>
              <div className="text-base-content text-xl font-semibold">
                $8,759
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-success inline-flex items-center gap-1">
                  <span className="icon-[tabler--arrow-up] size-4" />
                  25.6%
                </span>
                <span className="text-base-content/50 font-medium">
                  Related Value: 13.85
                </span>
              </div>
            </div>
          </div>

       
        </div>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="flex flex-col gap-6 md:flex-row xl:flex-col">
          {/* Meeting Schedules */}
        
          {/* Students By Countries */}
        
        </div>
        {/* Sales Metrics */}
        <div className="card shadow-base-300/10 shadow-md xl:col-span-3">
          <div className="card-body gap-6">
            <div className="flex w-full items-start gap-6 max-md:flex-col">
              <div className="flex grow flex-col gap-7.5 max-md:w-full">
             
                {/* Company Info */}
                <div className="flex items-center gap-4">
                 
                </div>
                {/* Company Info */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                    <div className="avatar avatar-placeholder">
                      <div className="bg-warning/20 text-warning rounded-field size-11.5">
                        <span className="icon-[tabler--trending-up] size-6" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base-content/50 text-sm font-medium">
                        Sales trend
                      </span>
                      <span className="text-base-content text-lg font-semibold">
                        $ 11,548
                      </span>
                    </div>
                  </div>
                  <div className="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                    <div className="avatar avatar-placeholder">
                      <div className="text-success bg-success/20 rounded-field size-11.5">
                        <span className="icon-[tabler--chart-bar] size-6" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base-content/50 text-sm font-medium">
                        Total Profit
                      </span>
                      <span className="text-base-content text-lg font-semibold">
                        $1735
                      </span>
                    </div>
                  </div>
                  <div className="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                    <div className="avatar avatar-placeholder">
                      <div className="text-primary bg-primary/20 rounded-field size-11.5">
                        <span className="icon-[tabler--discount-2] size-6" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base-content/50 text-sm font-medium">
                        Discounts
                      </span>
                      <span className="text-base-content text-lg font-semibold">
                        $ 14,987
                      </span>
                    </div>
                  </div>
                  <div className="border-base-content/20 rounded-box flex gap-4 border px-4 py-3">
                    <div className="avatar avatar-placeholder">
                      <div className="text-accent bg-accent/20 rounded-field size-11.5">
                        <span className="icon-[tabler--wallet] size-6" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base-content/50 text-sm font-medium">
                        Refunds
                      </span>
                      <span className="text-base-content text-lg font-semibold">
                        $3248
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Revenue Goal Section */}
              <div className="bg-base-200 item-center rounded-box flex justify-center max-md:w-full">
                <div className="bg-base-200 rounded-box space-y-4 p-4">
                  <h3 className="text-base-content text-xl font-medium">
                    Quiz Performance
                  </h3>
                  {/* Radial Progress */}
                  <div id="revenue-chart" className="w-full" />
              
                </div>
              </div>
            </div>
            {/* Bottom Section */}
           
          </div>
        </div>
      </div>
      {/* Payment Status Table */}
      
    </main>
    {/* ---------- END MAIN CONTENT ---------- */}
    {/* ---------- FOOTER CONTENT ---------- */}
    <footer className="mx-auto w-full max-w-7xl px-6 py-3.5 text-sm">
    
    </footer>
    {/* ---------- END FOOTER CONTENT ---------- */}
  </div>
</div>

  )
}

export default UserDashboard
