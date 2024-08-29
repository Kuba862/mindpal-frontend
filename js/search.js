// w pierwszym uruchomieniu pobierz dane z endpointu http://localhost:5001/api/all-motes

export const fetchAllNotes = async () => {
    const response = await fetch('http://localhost:5001/api/all-notes');
    const data = await response.json();
    return data;
    }

