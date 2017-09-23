//action Inputs:
//  vmName - string
//
//Return Type: VC:VirtualMachine

var found = VcPlugin.getAllVirtualMachines(null, "xpath:name[matches(.,'"+vmName+"')]");
if (found.length > 1) {
	throw(vmName+" matched more than one Virtual Machine");
}
if (found.length == 1) {
	return found[0];
}
throw("Virtual Machine does not exist by name: "+vmName);