"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function CollapsibleProjectHistory() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-gray-200 pt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Complete Project History</h3>
      <p className="text-gray-600 mb-4">
        Presented below is a comprehensive list of projects completed since 1971, demonstrating the versatility and
        worldwide application of the IT3 System.
      </p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-black hover:bg-gray-800 transition-colors p-4 rounded-lg mb-4 text-white"
        aria-expanded={isOpen}
        aria-controls="project-history-table"
      >
        <span className="font-medium">
          {isOpen ? "Hide Project History Table" : "View Complete Project History Table"}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-yellow-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-yellow-400" />
        )}
      </button>

      <div
        id="project-history-table"
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mt-4 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3 border-b text-left">Date</th>
                <th className="py-2 px-3 border-b text-left">Company</th>
                <th className="py-2 px-3 border-b text-left">Line Length</th>
                <th className="py-2 px-3 border-b text-left">Line Size</th>
                <th className="py-2 px-3 border-b text-left">Stream</th>
                <th className="py-2 px-3 border-b text-left">Location</th>
                <th className="py-2 px-3 border-b text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              {/* 2010s Projects */}
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Feb 2013</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y Oil tanking)</td>
                <td className="py-2 px-3 border-b">984m / 3,229ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Salaverry, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Apr 2012 - Nov 2012</td>
                <td className="py-2 px-3 border-b">YPFB Transporte S.A.</td>
                <td className="py-2 px-3 border-b">1,482m / 4,862ft</td>
                <td className="py-2 px-3 border-b">14" / 16"</td>
                <td className="py-2 px-3 border-b">Crude Oil Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Arica, Chile</td>
                <td className="py-2 px-3 border-b">Roberto Antesana 591-3-3566730</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">May 2010 - Feb 2011</td>
                <td className="py-2 px-3 border-b">Petroperu & Vopak S.A.</td>
                <td className="py-2 px-3 border-b">3,333m / 10,940ft</td>
                <td className="py-2 px-3 border-b">14" / 16"</td>
                <td className="py-2 px-3 border-b">Whites On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Callao, Peru</td>
                <td className="py-2 px-3 border-b">Fernando Zevallos 614-5000</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Dec 2010 - Feb 2011</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">1,290m / 4,235ft</td>
                <td className="py-2 px-3 border-b">New 14" / 16"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Chimbote, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 2010 - Dec 2010</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">625m / 2,083ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Mollendo, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Feb 2010 - Apr 2010</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">1,000m / 3,280ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Supe, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jan 2010 - Feb 2010</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">1,436m / 4,710ft</td>
                <td className="py-2 px-3 border-b">12" / 14"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Eten, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Nov 2009 - Dec 2009</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">976m / 3,201ft</td>
                <td className="py-2 px-3 border-b">12" / 14"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Salaverry, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Nov 2009</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">635m / 3,280ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Mollendo, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 2009 - Nov 2009</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">435m / 1,427ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Blacks Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Ilo, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Feb 2008 - Mar 2008</td>
                <td className="py-2 px-3 border-b">Consortia Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">1,000m / 3,280ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Supe, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Dec 2007 - April 2008</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">1,290m / 4,235ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Chimbote, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Nov 2007</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">976m / 3,201ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Salaverry, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 2007</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">1,436m / 4,710ft</td>
                <td className="py-2 px-3 border-b">12" / 14"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Eten, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Sep 2007</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">625m / 2,083ft</td>
                <td className="py-2 px-3 border-b">10" / 14"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Mollendo, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Aug 2007</td>
                <td className="py-2 px-3 border-b">Consorcio Terminales (GMP y OIL Tanking)</td>
                <td className="py-2 px-3 border-b">435m / 1,427ft</td>
                <td className="py-2 px-3 border-b">10" / 12"</td>
                <td className="py-2 px-3 border-b">Whites Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Ilo, Peru</td>
                <td className="py-2 px-3 border-b">Roberto Cairo 215-1500</td>
              </tr>

              {/* 2000s Projects */}
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jan 2005</td>
                <td className="py-2 px-3 border-b">Oliver Phillips</td>
                <td className="py-2 px-3 border-b">22,000ft</td>
                <td className="py-2 px-3 border-b">8" / 16"</td>
                <td className="py-2 px-3 border-b">H2S On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Bakersfield, California</td>
                <td className="py-2 px-3 border-b"></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">May 2004</td>
                <td className="py-2 px-3 border-b">Pemex</td>
                <td className="py-2 px-3 border-b">25,000ft</td>
                <td className="py-2 px-3 border-b">20" / 24"</td>
                <td className="py-2 px-3 border-b">Fuel Oil Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Rosarito, Mexico</td>
                <td className="py-2 px-3 border-b">Miguel Navarro</td>
              </tr>

              {/* 1990s Projects */}
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Feb 1997</td>
                <td className="py-2 px-3 border-b">Con Edison of New York, Inc.</td>
                <td className="py-2 px-3 border-b">95 ft</td>
                <td className="py-2 px-3 border-b">4" x 6"</td>
                <td className="py-2 px-3 border-b">Acid Wash On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">East River, NYC</td>
                <td className="py-2 px-3 border-b">Igor Levyash, Eng. (212)614-3502</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Feb - Mar 1993</td>
                <td className="py-2 px-3 border-b">Con Edison Of New York, Inc.</td>
                <td className="py-2 px-3 border-b">1,750 ft</td>
                <td className="py-2 px-3 border-b">12' x 14"</td>
                <td className="py-2 px-3 border-b">Fuel Oil On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Astoria, NYC</td>
                <td className="py-2 px-3 border-b">Bill Burns, P.E. (212)358-0995</td>
              </tr>

              {/* 1980s Projects */}
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1984</td>
                <td className="py-2 px-3 border-b">Williams Brothers Engineering</td>
                <td className="py-2 px-3 border-b">3,580 ft</td>
                <td className="py-2 px-3 border-b">8" & 24"</td>
                <td className="py-2 px-3 border-b">3 phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">San Antonio, TX</td>
                <td className="py-2 px-3 border-b">Mike Woodcock (918)496-5228</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Aug 1984</td>
                <td className="py-2 px-3 border-b">Pan Canadian Petroleum. Ltd.</td>
                <td className="py-2 px-3 border-b">7,000 ft</td>
                <td className="py-2 px-3 border-b">8" & 10" piping and fitting</td>
                <td className="py-2 px-3 border-b">produced water - brine injection On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Weyburn, Saskatchewan, Canada</td>
                <td className="py-2 px-3 border-b">A.E. Harris</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1984</td>
                <td className="py-2 px-3 border-b">Union Carbide</td>
                <td className="py-2 px-3 border-b">3,700 ft</td>
                <td className="py-2 px-3 border-b">6"</td>
                <td className="py-2 px-3 border-b">fresh water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Texas City, TX</td>
                <td className="py-2 px-3 border-b">John Leedy</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jan 1984</td>
                <td className="py-2 px-3 border-b">B.P. North America</td>
                <td className="py-2 px-3 border-b">2 Lines @ 1,940ft/ea.</td>
                <td className="py-2 px-3 border-b">10" x 8"</td>
                <td className="py-2 px-3 border-b">oil On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Newark, NJ</td>
                <td className="py-2 px-3 border-b">Paul Ferguson (914)381-6608</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Aug 1982</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">8,200 ft</td>
                <td className="py-2 px-3 border-b">3" steel</td>
                <td className="py-2 px-3 border-b">3-phase oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Rolf Myers</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1982</td>
                <td className="py-2 px-3 border-b">Arco Alaska, Inc.</td>
                <td className="py-2 px-3 border-b">4,300 ft</td>
                <td className="py-2 px-3 border-b">42" steel 39.20 O.D. R.T.R</td>
                <td className="py-2 px-3 border-b">3-phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Prudhoe Bay, AK</td>
                <td className="py-2 px-3 border-b">T.L. Stoner</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jun 1982</td>
                <td className="py-2 px-3 border-b">Arco</td>
                <td className="py-2 px-3 border-b">26,400 ft</td>
                <td className="py-2 px-3 border-b">8" steel & 6" FRP</td>
                <td className="py-2 px-3 border-b">3 phase-oil, gas & sea water Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Santa Barbara, CA</td>
                <td className="py-2 px-3 border-b">Don Peterson</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1981</td>
                <td className="py-2 px-3 border-b">Shell Oil Company</td>
                <td className="py-2 px-3 border-b">40,000 ft</td>
                <td className="py-2 px-3 border-b">18" Cement Cylinder x 16" AO</td>
                <td className="py-2 px-3 border-b">Fresh Water - Brackish On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Odessa, TX</td>
                <td className="py-2 px-3 border-b">Navanje, Milanovich</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Sept 1981</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">28,000 ft</td>
                <td className="py-2 px-3 border-b">3" x 2" Steel</td>
                <td className="py-2 px-3 border-b">Oil On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Rolf Myers</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Aug 1981</td>
                <td className="py-2 px-3 border-b">Shell Oil Company</td>
                <td className="py-2 px-3 border-b">5,500 ft</td>
                <td className="py-2 px-3 border-b">6" x 5" RTR</td>
                <td className="py-2 px-3 border-b">Produced Water Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Hobbs, NM</td>
                <td className="py-2 px-3 border-b"></td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1981</td>
                <td className="py-2 px-3 border-b">Shell Oil Company</td>
                <td className="py-2 px-3 border-b">7,000 ft</td>
                <td className="py-2 px-3 border-b">16" cement cylinder</td>
                <td className="py-2 px-3 border-b">Salt Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Odessa, TX</td>
                <td className="py-2 px-3 border-b">Navanje Milanovich</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Apr 1981</td>
                <td className="py-2 px-3 border-b">Texaco</td>
                <td className="py-2 px-3 border-b">12,200 ft</td>
                <td className="py-2 px-3 border-b">14" cement cylinder</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">Del Richter</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1981</td>
                <td className="py-2 px-3 border-b">The Coastal Corp.</td>
                <td className="py-2 px-3 border-b">1,100 ft / 960 ft</td>
                <td className="py-2 px-3 border-b">8" / 4"</td>
                <td className="py-2 px-3 border-b">Gasoline On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Corpus Christi, TX</td>
                <td className="py-2 px-3 border-b">Pat Turner</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Sept 1980</td>
                <td className="py-2 px-3 border-b">Crown Central</td>
                <td className="py-2 px-3 border-b">150 ft</td>
                <td className="py-2 px-3 border-b">10" x 8"</td>
                <td className="py-2 px-3 border-b">Crude Oil On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Houston, TX</td>
                <td className="py-2 px-3 border-b">James Tinley</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Sept 1980</td>
                <td className="py-2 px-3 border-b">Burmah Oil (Bahamas) Ltd.</td>
                <td className="py-2 px-3 border-b">4,000 ft</td>
                <td className="py-2 px-3 border-b">36" Steel/FRP</td>
                <td className="py-2 px-3 border-b">Sea Water Off-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Freeport, Grand Bahama</td>
                <td className="py-2 px-3 border-b">Durwood Archer (809) 368-3471</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jun 1980</td>
                <td className="py-2 px-3 border-b">Shell Oil Company</td>
                <td className="py-2 px-3 border-b">17,400 ft</td>
                <td className="py-2 px-3 border-b">20" Cement Line Steel</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Odessa, TX</td>
                <td className="py-2 px-3 border-b">Jim Peck (713) 932-5400</td>
              </tr>

              {/* 1970s Projects */}
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1979</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">4,197 ft</td>
                <td className="py-2 px-3 border-b">3" steel</td>
                <td className="py-2 px-3 border-b">3-phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Ralph Meyers (304) 234-7311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1979</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">3,490 ft</td>
                <td className="py-2 px-3 border-b">3" steel</td>
                <td className="py-2 px-3 border-b">3-phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Ralph Meyers (304) 234-7311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1979</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">1,375 ft</td>
                <td className="py-2 px-3 border-b">3" steel</td>
                <td className="py-2 px-3 border-b">3 phase oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Ralph Meyers (304) 234-7311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1979</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">2,698 ft</td>
                <td className="py-2 px-3 border-b">3" steel</td>
                <td className="py-2 px-3 border-b">3 phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Ralph Meyers (304) 234-7311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1978</td>
                <td className="py-2 px-3 border-b">Texaco, Inc.</td>
                <td className="py-2 px-3 border-b">4,786 ft</td>
                <td className="py-2 px-3 border-b">8" steel/PVC</td>
                <td className="py-2 px-3 border-b">2 phase-oil, gas produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">KI Ebner (303) 861-4220</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1978</td>
                <td className="py-2 px-3 border-b">Texaco, Inc.</td>
                <td className="py-2 px-3 border-b">9,700 ft</td>
                <td className="py-2 px-3 border-b">6" steel/PVC</td>
                <td className="py-2 px-3 border-b">2 phase-oil, gas produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">KI Ebner (303) 861-4220</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1978</td>
                <td className="py-2 px-3 border-b">Conoco</td>
                <td className="py-2 px-3 border-b">6,000 ft</td>
                <td className="py-2 px-3 border-b">6' steel/FRP</td>
                <td className="py-2 px-3 border-b">3 phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Dickinson, ND</td>
                <td className="py-2 px-3 border-b">Ralph Meyers (307) 234-7311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">May 1977</td>
                <td className="py-2 px-3 border-b">Texaco, Inc.</td>
                <td className="py-2 px-3 border-b">9,500 ft</td>
                <td className="py-2 px-3 border-b">6 5/8" Steel/PVC</td>
                <td className="py-2 px-3 border-b">2 phase-oil, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Keene, ND</td>
                <td className="py-2 px-3 border-b">KI Ebner (303) 861-4220</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1976</td>
                <td className="py-2 px-3 border-b">Superior Oil Company</td>
                <td className="py-2 px-3 border-b">11,145 ft</td>
                <td className="py-2 px-3 border-b">4" steel/CPVC</td>
                <td className="py-2 px-3 border-b">3 phase-oil, gas, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">Ken Johnson (303) 565-3733</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1976</td>
                <td className="py-2 px-3 border-b">Superior Oil Company</td>
                <td className="py-2 px-3 border-b">2,230 ft</td>
                <td className="py-2 px-3 border-b">3" steel/CPVC</td>
                <td className="py-2 px-3 border-b">3 phase-oil,gas produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">Ken Johnson (303) 565-3733</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">September 1976</td>
                <td className="py-2 px-3 border-b">Homestake Mining Company</td>
                <td className="py-2 px-3 border-b">2,933 ft</td>
                <td className="py-2 px-3 border-b">14" steel/PVC</td>
                <td className="py-2 px-3 border-b">Mine Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Ros Mine Pump Line</td>
                <td className="py-2 px-3 border-b">Jerry Pontius (605) 584-1020</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Aug 1975</td>
                <td className="py-2 px-3 border-b">Shell/Canada</td>
                <td className="py-2 px-3 border-b">6,000 ft</td>
                <td className="py-2 px-3 border-b">6" steel/FRP</td>
                <td className="py-2 px-3 border-b">Sour Multiphase Fluids On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Hunter Valley Line Burnt Timber Complex</td>
                <td className="py-2 px-3 border-b">John Baron (403) 232-4168</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jun 1975</td>
                <td className="py-2 px-3 border-b">United Canso Oil & Gas Ltd.</td>
                <td className="py-2 px-3 border-b">7,040 ft</td>
                <td className="py-2 px-3 border-b">3" cement Lined/PVC</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Estevan, Saskatchewan, Canada</td>
                <td className="py-2 px-3 border-b">JO Telfer (403) 269-3151</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Dec 1974</td>
                <td className="py-2 px-3 border-b">Chevron Standard Ltd.</td>
                <td className="py-2 px-3 border-b">3,600 ft</td>
                <td className="py-2 px-3 border-b">3" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Rimby, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">Ray Bancause (403) 346-4105</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Nov 1974</td>
                <td className="py-2 px-3 border-b">Luscar Ltd.</td>
                <td className="py-2 px-3 border-b">5,940 ft</td>
                <td className="py-2 px-3 border-b">3" steel/PVC</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Drayton Valley, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">John Bray (403) 453-2311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Nov 1974</td>
                <td className="py-2 px-3 border-b">Legal Oil & Gas Ltd.</td>
                <td className="py-2 px-3 border-b">2,030 ft</td>
                <td className="py-2 px-3 border-b">2" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Legal, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">Charles Foster (403) 435-4744</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Oct 1973</td>
                <td className="py-2 px-3 border-b">Superior Oil Company</td>
                <td className="py-2 px-3 border-b">1,030 ft</td>
                <td className="py-2 px-3 border-b">11.5" Aluminum</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">Ken Johnson (303) 565-3733</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">May 1973</td>
                <td className="py-2 px-3 border-b">Luscar Ltd.</td>
                <td className="py-2 px-3 border-b">4,890 ft</td>
                <td className="py-2 px-3 border-b">3" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Pembina, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">John Bray (403) 453-2311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">May 1973</td>
                <td className="py-2 px-3 border-b">Star Oil Company</td>
                <td className="py-2 px-3 border-b">2,400 ft</td>
                <td className="py-2 px-3 border-b">2" steel/PVC</td>
                <td className="py-2 px-3 border-b">Oil On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Parkman, Saskatchewan, Canada</td>
                <td className="py-2 px-3 border-b">John Bray (403) 453-2311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Apr 1973</td>
                <td className="py-2 px-3 border-b">Texaco, Inc.</td>
                <td className="py-2 px-3 border-b">3,230 ft</td>
                <td className="py-2 px-3 border-b">2" Steel</td>
                <td className="py-2 px-3 border-b">2 phase-oil, produced water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">KI Ebner (303) 861-4220</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Apr 1973</td>
                <td className="py-2 px-3 border-b">Texaco, Inc.</td>
                <td className="py-2 px-3 border-b">2,100 ft / 270 ft</td>
                <td className="py-2 px-3 border-b">2.5" steel / 2" steel</td>
                <td className="py-2 px-3 border-b">2 phase, oil, water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Aneth, UT</td>
                <td className="py-2 px-3 border-b">KI Ebner (303) 861-4220</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1973</td>
                <td className="py-2 px-3 border-b">Home Oil Company, Ltd.</td>
                <td className="py-2 px-3 border-b">6,975 ft</td>
                <td className="py-2 px-3 border-b">3" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Swan Hills, Inverness Unit</td>
                <td className="py-2 px-3 border-b">Doug Wiltze (403) 232-7883</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1972</td>
                <td className="py-2 px-3 border-b">Texaco Exploration Canada, Ltd.</td>
                <td className="py-2 px-3 border-b">923 ft</td>
                <td className="py-2 px-3 border-b">2" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Pembina, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">Dana Lausten (403) 266-7131</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1972</td>
                <td className="py-2 px-3 border-b">Texaco Exploration Canada, Ltd.</td>
                <td className="py-2 px-3 border-b">8,200 ft</td>
                <td className="py-2 px-3 border-b">2" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Fresh Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Pembina, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">Dana Lausten (403) 266-7131</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Mar 1971</td>
                <td className="py-2 px-3 border-b">Luscar Ltd.</td>
                <td className="py-2 px-3 border-b">2,296 ft</td>
                <td className="py-2 px-3 border-b">3" Steel</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b"></td>
                <td className="py-2 px-3 border-b">John Bray (403) 453-2311</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1971</td>
                <td className="py-2 px-3 border-b">Bedford Petroleum Ltd.</td>
                <td className="py-2 px-3 border-b">2,666 ft</td>
                <td className="py-2 px-3 border-b">2" Steel</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Estevan, Saskatchewan, Canada</td>
                <td className="py-2 px-3 border-b">Glenn Gibson (403) 261-8926</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1971</td>
                <td className="py-2 px-3 border-b">Bedford Petroleum Ltd.</td>
                <td className="py-2 px-3 border-b">8,808 ft</td>
                <td className="py-2 px-3 border-b">2" Steel</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Estevan, Saskatchewan, Canada</td>
                <td className="py-2 px-3 border-b">Glenn Gibson (403) 261-8926</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jul 1971</td>
                <td className="py-2 px-3 border-b">Bedford Petroleum Ltd.</td>
                <td className="py-2 px-3 border-b">2,718 ft</td>
                <td className="py-2 px-3 border-b">2" Steel</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Estevan, Saskatchewan, Canada</td>
                <td className="py-2 px-3 border-b">Glenn Gibson (403) 261-8926</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jun 1971</td>
                <td className="py-2 px-3 border-b">Norcen Energy Resources, Ltd</td>
                <td className="py-2 px-3 border-b">1,480 ft</td>
                <td className="py-2 px-3 border-b">4" Steel/FRP</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Joarcam, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">Herman Rounceville (403) 455-4171</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3 border-b">Jun 1971</td>
                <td className="py-2 px-3 border-b">Texaco, Inc.</td>
                <td className="py-2 px-3 border-b">6,545 ft</td>
                <td className="py-2 px-3 border-b">2" Steel/PVC</td>
                <td className="py-2 px-3 border-b">Produced Water On-shore Pipeline</td>
                <td className="py-2 px-3 border-b">Braemar, Alberta, Canada</td>
                <td className="py-2 px-3 border-b">Dana Lausten (403) 266-7131</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-600 mt-4 text-sm italic">
          Note: This comprehensive project list demonstrates PPT's extensive experience with the IT3 System across North
          America and beyond since 1971.
        </p>
      </div>
    </div>
  )
}
