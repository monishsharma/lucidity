import React, { useState } from 'react'
import CustomTable from '../../components/table'
import { InventoryConstant } from '../../tableConstants'
import PageLoader from '../../components/page-loader';
import { useLocation } from 'react-router-dom';
import WidgetContainer from '../../components/widgetContainer';

const User = ({data, getInventoryDataConnect}) => {

    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    React.useEffect(() => {
        if (!data.length) {
          setIsLoading(true);
          getInventoryDataConnect()
            .then((res) => {
              setIsLoading(false);
            })
            .catch(() => {
              setIsLoading(false);
            });
        }
      }, []);

    if (isLoading) return <PageLoader />;

    return (
        <div>
            <h1>User</h1>
            <WidgetContainer
                inventoryData={data}
            />
            <CustomTable cols={InventoryConstant({ location })} data={data} />
        </div>
    )
}

export default User