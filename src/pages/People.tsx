function People() {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <h1 className="text-2xl font-bold text-black mb-6">
        Group Members
      </h1>

      {/* Current Members */}
      <div className="space-y-4 mb-10">
        {/* Professor */}
        <table className="border-0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="align-top pr-4">
                <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">NA</div>
              </td>
              <td className="align-top">
                <div className="font-bold text-black text-base">Dr. Nguyen Van A</div>
                <div className="text-sm text-black"><em>Associate Professor</em></div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Associate Research Scholar */}
        <table className="border-0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td className="align-top pr-4">
                <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">NB</div>
              </td>
              <td className="align-top">
                <div className="font-bold text-black text-base">Dr. Nguyen Thi B</div>
                <div className="text-sm text-black"><em>Associate Research Scholar</em></div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* PhD Students - 2 columns */}
        <table className="w-full border-0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td width="50%" className="align-top pr-4">
                <table className="border-0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="align-top pr-4">
                        <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">TC</div>
                      </td>
                      <td className="align-top">
                        <div className="font-bold text-black text-base">Tran Van C</div>
                        <div className="text-sm text-black"><em>PhD Student in CEE</em></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="50%" className="align-top pl-4">
                <table className="border-0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="align-top pr-4">
                        <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">LD</div>
                      </td>
                      <td className="align-top">
                        <div className="font-bold text-black text-base">Le Thi D</div>
                        <div className="text-sm text-black"><em>PhD Student in CEE</em></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td width="50%" className="align-top pr-4 pt-4">
                <table className="border-0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="align-top pr-4">
                        <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">PE</div>
                      </td>
                      <td className="align-top">
                        <div className="font-bold text-black text-base">Pham Van E</div>
                        <div className="text-sm text-black"><em>PhD Student in CEE</em></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="50%" className="align-top pl-4 pt-4">
                <table className="border-0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="align-top pr-4">
                        <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">HF</div>
                      </td>
                      <td className="align-top">
                        <div className="font-bold text-black text-base">Hoang Thi F</div>
                        <div className="text-sm text-black"><em>PhD Student in CBE</em></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Undergraduate RAs - 2 columns */}
        <table className="w-full border-0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td width="50%" className="align-top pr-4">
                <table className="border-0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="align-top pr-4">
                        <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">VG</div>
                      </td>
                      <td className="align-top">
                        <div className="font-bold text-black text-base">Vu Van G</div>
                        <div className="text-sm text-black"><em>Undergraduate Research Assistant</em></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="50%" className="align-top pl-4">
                <table className="border-0" cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td className="align-top pr-4">
                        <div className="w-24 h-24 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500">DH</div>
                      </td>
                      <td className="align-top">
                        <div className="font-bold text-black text-base">Do Thi H</div>
                        <div className="text-sm text-black"><em>Undergraduate Research Assistant</em></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Previous Group Members (2015-2024) */}
      <h2 className="text-lg font-bold text-black mb-4">
        Previous Group Members (2015-2024)
      </h2>
      <table className="w-full border-0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td width="50%" className="align-top pr-4 pb-4">
              <table className="border-0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="align-top pr-3">
                      <div className="w-16 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500 text-sm">I</div>
                    </td>
                    <td className="align-top">
                      <div className="font-bold text-black text-sm">Nguyen Van I</div>
                      <div className="text-xs text-black"><em>Postdoctoral Scholar, Vietnam National University</em></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="50%" className="align-top pl-4 pb-4">
              <table className="border-0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="align-top pr-3">
                      <div className="w-16 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500 text-sm">K</div>
                    </td>
                    <td className="align-top">
                      <div className="font-bold text-black text-sm">Tran Thi K</div>
                      <div className="text-xs text-black"><em>Machine Learning Engineer, ABC Company</em></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td width="50%" className="align-top pr-4 pb-4">
              <table className="border-0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="align-top pr-3">
                      <div className="w-16 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500 text-sm">L</div>
                    </td>
                    <td className="align-top">
                      <div className="font-bold text-black text-sm">Le Van L</div>
                      <div className="text-xs text-black"><em>Assistant Professor, HUST</em></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td width="50%" className="align-top pl-4 pb-4">
              <table className="border-0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="align-top pr-3">
                      <div className="w-16 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center font-bold text-gray-500 text-sm">M</div>
                    </td>
                    <td className="align-top">
                      <div className="font-bold text-black text-sm">Pham Thi M</div>
                      <div className="text-xs text-black"><em>Associate Professor, Cornell University</em></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Previous Group Members (2009-2014) */}
      <h2 className="text-lg font-bold text-black mb-4 mt-6">
        Previous Group Members (2009-2014)
      </h2>
      <div className="space-y-1 text-sm text-black mb-6">
        <p><b>Nguyen Van R</b>, Associate Professor, Auburn University</p>
        <p><b>Tran Thi S</b>, Research Scientist, Jet Propulsion Laboratory</p>
        <p><b>Le Van T</b>, Associate Professor, Umea University, Sweden</p>
        <p><b>Pham Thi U</b>, Assistant Professor, UC Berkeley</p>
      </div>

      {/* Previous Visiting Graduate Students */}
      <h2 className="text-lg font-bold text-black mb-4">
        Previous Visiting Graduate Students
      </h2>
      <div className="space-y-1 text-sm text-black">
        <p><b>Hoang Van V</b>, Engineer, French Agency for Radioactive Waste</p>
        <p><b>Vu Thi X</b>, Postdoctoral Scholar, UCLA</p>
      </div>
    </div>
  )
}

export default People
