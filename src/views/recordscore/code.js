import React, { useState, useRef } from 'react';
import { initializeApp } from 'firebase/app'; // Import Firebase modules
import { getDatabase, ref, onValue, update } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  // ... your Firebase project configuration
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function EditableCell({ initialValue, databasePath }) {
  const [value, setValue] = useState(initialValue || '');
  const cellRef = useRef(null);

  const handleBlur = () => {
    update(ref(database, databasePath), { value });
  };

  return (
    <div
      ref={cellRef}
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}

function App() {
  const [tableData, setTableData] = useState({}); // Load from Firebase

  // Fetch initial data on component mount
  useEffect(() => {
    onValue(ref(database, 'table-data'), (snapshot) => {
      const data = snapshot.val();
      setTableData(data || {});
    });
  }, []);

  return (
    <div>
      <table>
        {/* Map over your table data to create rows and cells */}
        {Object.entries(tableData).map(([rowId, rowData]) => (
          <tr key={rowId}>
            {Object.entries(rowData).map(([cellId, cellValue]) => (
              <td key={cellId}>
                <EditableCell
                  initialValue={cellValue}
                  databasePath={`table-data/${rowId}/${cellId}`}
                />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
