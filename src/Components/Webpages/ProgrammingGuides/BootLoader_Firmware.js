import React from 'react';
import "../Webpages.css";

const Bootloader = () => {

    const centeredDiv = {
        margin: "auto", 
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div className='PageContainer'>
            <h1>Bootloading and Firmware</h1>
            <p>
                Bootloading is the process that initializing hardware and providing basic services when a computer
                is turned on. Services include loading and initializing the operating system onto the hardware, 
                initializing memory, and other minor services. I am following a training course by 
                <a href="https://bootlin.com/doc/training/embedded-linux/">bootlin</a> and leaving my reference notes on this page.
                <br /><br />
                <h3>BIOS Firmware (2005-2006)</h3>
                    BIOS, Basic input/output, was initially proprietary frimware by IBM but and reverse engineered by others. 
                    Was stored in a separate, non-volatile Read-Only-Memory (ROM) chip that could not be modified after 
                    it was manufactured. BIOS firmware required that first 466 bytes of storage device were bootloader code.
                    <br/><br/>
                    Bootloader code functions in two stages: the first stage executes instructions from first 466 bytes,
                    the second stage instructions (more than 466 bytes) are loaded and executed by the first stage. The 
                    disk partition table is loaded by stage 1.
                <br /><br />
                <h3>UEFI (2006+)</h3>
                    Unified Extensible Firmware Interface (UEFI). This is an interface in charge of booting. This
                    program is stored in flash memory, it can be modified after manufacturing. It directly loads
                    EFI binaries ={'>'} loads bootloader ={'>'} loads kernel. EFI binaries are stored in a specific
                    disk partition and are generally the bootloader.
                    <br /><br />
                <h3>ACPI (2006+)</h3>
                    Advanced Configuration and Power Interface (ACPI). Contains tables that describe hardware.
                    Operating systems can use this table to discover/enable/disable hardware components.
                <br/><br/>
                <h3>Booting on Embedded Platforms</h3>
                    Embedded systems usually have a ROM that either contains or find an appropriate bootloader. The ROM
                    code usually initializes that RAM and loads second stage into RAM and then executes it. 
                    Some processors may allow an external bootloader to be loaded from an external storage device.
                <br /><br />
                <h3>Firmware/Bootloader's role after booting</h3>
                    Most bootloader process are discarded after OS Kernel is loaded. However, some modern
                    System on Chips (SoC) bootloaders remain stored in RAM memory and provide hardware services
                    to the OS. I believe this occurs on modern ARM processors, where the bootloader firmware 
                    runs in the most privileged mode. This provides isolation between the OS and system hardware.
                <br /><br />
                <h3>U-Boot for TrustedFirmware</h3>
                    Custom bootloaders might be necessary for embedded systems. T-FA and U-Boot
                    can be customized for a secure boot process. For configuring T-FA, custom definition of
                    device architecture, platform, secure payload (ARM specific), Device Tree Blob (DTB),
                    path to second stage bootloader. This creates T-FA and an image of U-Boot which is loaded
                    in by T-FA. Overall boot process: ROM code ={'>'} T-FA ={'>'} U-Boot ={'>'} Kernel. 
                    T-FA, U-Boot, and Kernel all stored in separate disk partitions.
            </p>
        </div>
    );
};

export default Bootloader;