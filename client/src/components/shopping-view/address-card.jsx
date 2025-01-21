import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

function AddressCard({ addressInfo, handleDeleteAddress, handleEditAddress }) {
    return (
        <Card>
            <CardContent className="grid p-4 gap-4">
                <Label>Address: {addressInfo?.address}</Label>
                <Label>City: {addressInfo?.city}</Label>
                <Label>Postal Code:{addressInfo?.postalcode}</Label>
                <Label>Phone: {addressInfo?.phone}</Label>
                <Label>Notes: {addressInfo?.notes}</Label>
            </CardContent>
            <CardFooter className="p-3 justify-between">
                <Button className="" onClick={()=> handleEditAddress(addressInfo)}>Edit</Button>
                <Button onClick={()=> handleDeleteAddress(addressInfo)}>Delete</Button>
            </CardFooter>
        </Card>);
}

export default AddressCard;
