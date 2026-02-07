function Home() {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      {/* Title */}
      <h1 className="text-2xl font-bold text-black mb-4">
        Interfacial Water Research Group
      </h1>

      {/* Profile Section - Table layout matching Princeton */}
      <table className="w-full border-0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            {/* Left - Personal Photo (270px x 280px) */}
            <td width="270" height="280" className="align-center text-center">
              <img 
                src="/asset_1.jpg" 
                alt="Dr. Nguyen Van A" 
                width="270"
                className="border border-gray-300"
              />
            </td>
            {/* Gap */}
            <td width="5"></td>
            {/* Middle - Info (260px) */}
            <td width="260" className="align-top">
              <div className="text-xl font-bold text-black">
                Dr. Nguyen Van A
              </div>
              <div className="text-sm text-black mt-1">
                <em>Associate Professor</em>
              </div>
              <div className="text-sm text-black mt-4">
                Department of Civil and Environmental Engineering<br />
                Duy Tan University<br />
                Ho Chi Minh City, Vietnam
              </div>
              <div className="mt-4">
                <a 
                  href="#cv" 
                  className="text-sm"
                  style={{ color: '#000040' }}
                >
                  Curriculum Vitae
                </a>
              </div>
            </td>
            {/* Gap */}
            <td width="5"></td>
            {/* Right - Group Photo (260px x 260px) */}
            <td width="260" height="260" className="align-center text-center">
              <img 
                src="/asset_2.jpg" 
                alt="Research Group" 
                width="260"
                height="260"
                className="border border-gray-300"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      {/* Content Sections */}
      <table className="w-full border-0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td className="align-top">
              {/* Research Goals */}
              <p className="mb-4">
                <b className="text-lg text-black">Research Goals</b>
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-4">
                Interfaces between liquid water and other phases (minerals, air, carbon-rich fluids, living organisms) are ubiquitous in terrestrial natural environments. Surface chemistry and mass fluxes at these interfaces play key roles in influencing a broad range of environmental phenomena including contaminant fate and transport, metal biogeochemical cycling, multiphase flow in porous media, cloud nucleation, sediment transport, water treatment processes, and soil carbon dynamics. Our research aims to gain <b>fundamental insight into the properties of liquid water at interfaces</b> using state-of-the-art atomistic-level simulations, macroscopic scale models, and laboratory experiments in order to improve existing representations of key environmental processes. Current projects are focused particularly on understanding water and solute chemistry and mass fluxes in clayey media (soils, sediments, engineered clay barriers, shales) in conditions relevant to geologic carbon sequestration, waste isolation, soil carbon storage, and soil remediation.
              </p>

              {/* Methods */}
              <p className="mb-4">
                <b className="text-lg text-black">Methods</b>
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-4">
                Molecular simulation techniques are emerging as powerful complements to experimental environmental chemistry methods. A key strength of these techniques lies in their ability to probe small systems (up to millions of atoms) on a broader range of time scales than any experimental method (from femtoseconds to microseconds). Molecular simulations can reveal the behavior of individual atoms in complex systems (where spectroscopic and other experimental methods would probe the average behavior of large numbers of atoms or molecules) and the manner in which macroscopic-scale properties (adsorption and partitioning coefficients, interfacial energies, mass transfer kinetics, diffusion coefficients, disjoining pressures, etc.) emerge from atomistic-level interactions. Finally, molecular simulation techniques can probe geochemical systems under constraints that would be difficult or impossible to impose in the laboratory, such as fixed pore sizes, hypothetical isotopic masses, or precisely imposed non-equilibrium conditions.
              </p>

              {/* Current Research */}
              <p className="mb-4">
                <b className="text-lg text-black">Current Research</b>
              </p>

              {/* Research Area 1 */}
              <p className="mb-2">
                <b className="text-base text-black"><em>Natural and Engineered Clay Barriers</em></b>
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                Clay minerals--natural nanoparticles with a high specific surface area and cation exchange capacity--are ubiquitous in soils, sediments, and sedimentary rocks, where they strongly influence groundwater hydrology and solute migration. Engineered clay barriers are widely used for the isolation of landfills and contaminated sites. Clay-rich rock formations (shales, mudstones) help enable humanity's transition to low-carbon energy by playing key roles in carbon capture and storage and high-level radioactive waste storage. Our research examines the impact of clay-water interfaces on the barrier properties of these materials.
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                Our current focus in this area is on elucidating the <b>relationships between microstructure and aqueous geochemistry in clayey media</b>. For example, the feedback between pore size and cation adsorption in swelling clays is well documented (in some conditions, it gives rise to a spontaneous "de-mixing" of heteroionic swelling clays into mixtures of homoionic domains), but it remains incompletely characterized at the macroscale and essentially unexamined at the nanoscale. Our current projects in this area use molecular dynamics (MD) simulations and surface complexation models to examine the impact of pH and salinity on clay reactivity and mechanics including, notably, in the case of radiocesium adsorption in soils of the Fukushima region.
              </p>
              <p className="mb-4">
                <a href="#references" className="text-sm">References</a>
              </p>

              {/* Research Area 2 */}
              <p className="mb-2">
                <b className="text-base text-black"><em>Geologic Carbon Sequestration</em></b>
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                Carbon capture and storage (CCS) has the potential to contribute significantly to CO<sub>2</sub> abatement efforts required to stabilize global temperatures over the next century. The "storage" component of CCS, known as geologic carbon sequestration, involves injecting large quantities of supercritical CO<sub>2</sub> in suitable geologic formations (such as brine aquifers and depleted hydrocarbon reservoirs) where it will eventually react with host rocks to form carbonate minerals. A key requirement of CCS is the demonstration that fine-grained geologic formations (seals or caprocks) can trap CO<sub>2</sub> in the subsurface over time-scales of hundreds of years. Our research in this area uses MD and computational fluid dynamics (CFD) simulations to gain insight into the fundamental basis of CO<sub>2</sub> trapping mechanisms.
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                A first focus of our research in this area is on developing an <b>improved understanding of stress-porosity-permeability relations in porous media</b>. These relations (which are sensitive to clay content, clay mineralogy, and aqueous geochemistry) are essential to predicting the impacts of geochemistry and geomechanics on seal integrity and fracture permeability. The relations used in existing GCS models, however, bear little resemblance with the experimental database. A second major focus of our research in this area is on understanding the <b>fundamental basis of mineral-brine-CO<sub>2</sub> wetting properties</b> (static and dynamic contact angles, disjoining pressures in thin films) and the impact of wettability on the transport of organic matter and colloidal particles during CO<sub>2</sub>-brine multiphase flow in porous media.
              </p>
              <p className="mb-4">
                <a href="#references" className="text-sm">References</a>
              </p>

              {/* Research Area 3 */}
              <p className="mb-2">
                <b className="text-base text-black"><em>Mineral-Organic Interactions in Soils</em></b>
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                Contamination of soils, sediments, and surface waters by organic contaminants is one of the greatest threats to the quality of freshwater resources. Our research in this area aims to develop computational chemistry approaches to predicting the <b>partitioning of organic contaminants between different environmental phases</b>. This capability would, for example, enable <em>in silico</em> design of novel adsorbent materials tailored to remove specific contaminants. Our research in this area is focused particularly on the adsorption of per- and polyfluoroalkyl substances (PFAS).
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                A second major goal of our research in this area is to advance current fundamental understanding of the mechanisms of soil carbon "protection" by clay mineral surfaces. Soils are the largest pools of carbon near the Earth's surface and are presently estimated to act as a net carbon sink that absorbs ~2 Gt of carbon per year (roughly one-fifth of anthropogenic emissions). Fine-grained soil minerals (i.e., clay minerals and nanocrystalline Fe and Al oxides) modulate this carbon sink by impacting microbial respiration rates, but the details of this modulation remain elusive. Our research aims to shed light on the mechanics of clay-organic interaction by examining, notably, the structures formed by <b>coaggregation of soil organic matter and mineral nanoparticles</b> and their impacts on microbial processes.
              </p>
              <p className="mb-4">
                <a href="#references" className="text-sm">References</a>
              </p>

              {/* Research Area 4 */}
              <p className="mb-2">
                <b className="text-base text-black"><em>Isotope Effects in Liquid Water</em></b>
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                Kinetic isotope effects (KIEs)--whereby two isotopes of the same species undergo a transformation at slightly different rates--are powerful probes of <b>interfacial mass fluxes and the mechanisms that control them</b> (for example, during water evaporation, gas transfer between water and air, metal biogeochemical cycling, and solute diffusion in groundwater). Our group has pioneered the use of MD simulations to examine KIEs in liquid water. In particular, we showed that molecular diffusion of solutes in liquid water causes a KIE that significantly impacts hydrologic reconstructions of mass fluxes in fine-grained rocks and noble gas geochemistry reconstructions of continental paleoclimate. We also showed that the ligand-exchange rates of aquated metals are sensitive to isotopic mass in a manner that is consistent with experimental data on Ca isotope fractionation during calcite precipitation (an important paleo-proxy).
              </p>
              <p className="text-sm text-black text-justify leading-relaxed mb-2">
                Our ongoing research in this area is focused on quantifying and understanding the kinetic and equilibrium isotope effects associated with the partitioning and diffusion of monoatomic solutes (noble gases, alkali metals) in various aqueous phases including ice, liquid water, and water confined in clay interlayer nanopores. Our results have potential importance in enhancing the uses of isotopic geochemistry in the analysis of ice records and in the reconstruction of global biogeochemical cycles.
              </p>
              <p className="mb-4">
                <a href="#references" className="text-sm">References</a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
