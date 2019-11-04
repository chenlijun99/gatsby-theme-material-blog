---
date: 2019-10-06
tags:
  - ISO-OSI
---

From wikipedia

# OSI model

The Open Systems Interconnection model (OSI model) is a conceptual model that
characterizes and standardizes the communication functions of a
telecommunication or computing system without regard to its underlying internal
structure and technology. Its goal is the interoperability of diverse
communication systems with standard communication protocols. The model
partitions a communication system into abstraction layers. The original version
of the model had seven layers.

A layer serves the layer above it and is served by the layer below it. For
example, a layer that provides error-free communications across a network
provides the path needed by applications above it, while it calls the next lower
layer to send and receive packets that constitute the contents of that path. Two
instances at the same layer are visualized as connected by a horizontal
connection in that layer.

The model is a product of the Open Systems Interconnection project at the
International Organization for Standardization (ISO).

## Layer 1: Physical Layer

The physical layer is responsible for the transmission and reception of
unstructured raw data between a device and a physical transmission medium. It
converts the digital bits into electrical, radio, or optical signals. Layer
specifications define characteristics such as voltage levels, the timing of
voltage changes, physical data rates, maximum transmission distances, modulation
scheme, channel access method and physical connectors. This includes the layout
of pins, voltages, line impedance, cable specifications, signal timing and
frequency for wireless devices. Bit rate control is done at the physical layer
and may define transmission mode as simplex, half duplex, and full duplex. The
components of a physical layer can be described in terms of a network topology.
Bluetooth, Ethernet, and USB all have specifications for a physical layer.

## Layer 2: Data Link Layer

The data link layer provides node-to-node data transfer—a link between two
directly connected nodes. It detects and possibly corrects errors that may occur
in the physical layer. It defines the protocol to establish and terminate a
connection between two physically connected devices. It also defines the
protocol for flow control between them.

IEEE 802 divides the data link layer into two sublayers:[7]

Medium access control (MAC) layer – responsible for controlling how devices in a
network gain access to a medium and permission to transmit data.  Logical link
control (LLC) layer – responsible for identifying and encapsulating network
layer protocols, and controls error checking and frame synchronization.  The MAC
and LLC layers of IEEE 802 networks such as 802.3 Ethernet, 802.11 Wi-Fi, and
802.15.4 ZigBee operate at the data link layer.

The Point-to-Point Protocol (PPP) is a data link layer protocol that can operate
over several different physical layers, such as synchronous and asynchronous
serial lines.

The ITU-T G.hn standard, which provides high-speed local area networking over
existing wires (power lines, phone lines and coaxial cables), includes a
complete data link layer that provides both error correction and flow control by
means of a selective-repeat sliding-window protocol.

## Layer 3: Network Layer

The network layer provides the functional and procedural means of transferring
variable length data sequences (called packets) from one node to another
connected in "different networks". A network is a medium to which many nodes can
be connected, on which every node has an address and which permits nodes
connected to it to transfer messages to other nodes connected to it by merely
providing the content of a message and the address of the destination node and
letting the network find the way to deliver the message to the destination node,
possibly routing it through intermediate nodes. If the message is too large to
be transmitted from one node to another on the data link layer between those
nodes, the network may implement message delivery by splitting the message into
several fragments at one node, sending the fragments independently, and
reassembling the fragments at another node. It may, but does not need to, report
delivery errors.

Message delivery at the network layer is not necessarily guaranteed to be
reliable; a network layer protocol may provide reliable message delivery, but it
need not do so.

A number of layer-management protocols, a function defined in the management
annex, ISO 7498/4, belong to the network layer. These include routing protocols,
multicast group management, network-layer information and error, and
network-layer address assignment. It is the function of the payload that makes
these belong to the network layer, not the protocol that carries them.[8]

## Layer 4: Transport Layer

The transport layer provides the functional and procedural means of transferring
variable-length data sequences from a source to a destination host, while
maintaining the quality of service functions.

The transport layer controls the reliability of a given link through flow
control, segmentation/desegmentation, and error control. Some protocols are
state- and connection-oriented. This means that the transport layer can keep
track of the segments and re-transmit those that fail delivery. The transport
layer also provides the acknowledgement of the successful data transmission and
sends the next data if no errors occurred. The transport layer creates segments
out of the message received from the application layer. Segmentation is the
process of dividing a long message into smaller messages.

OSI defines five classes of connection-mode transport protocols ranging from
class 0 (which is also known as TP0 and provides the fewest features) to class 4
(TP4, designed for less reliable networks, similar to the Internet). Class 0
contains no error recovery, and was designed for use on network layers that
provide error-free connections. Class 4 is closest to TCP, although TCP contains
functions, such as the graceful close, which OSI assigns to the session layer.
Also, all OSI TP connection-mode protocol classes provide expedited data and
preservation of record boundaries. Detailed characteristics of TP0-4 classes are
shown in the following table:[9]

An easy way to visualize the transport layer is to compare it with a post
office, which deals with the dispatch and classification of mail and parcels
sent. A post office inspects only the outer envelope of mail to determine its
delivery. Higher layers may have the equivalent of double envelopes, such as
cryptographic presentation services that can be read by the addressee only.
Roughly speaking, tunneling protocols operate at the transport layer, such as
carrying non-IP protocols such as IBM's SNA or Novell's IPX over an IP network,
or end-to-end encryption with IPsec. While Generic Routing Encapsulation (GRE)
might seem to be a network-layer protocol, if the encapsulation of the payload
takes place only at the endpoint, GRE becomes closer to a transport protocol
that uses IP headers but contains complete Layer 2 frames or Layer 3 packets to
deliver to the endpoint. L2TP carries PPP frames inside transport segments.

Although not developed under the OSI Reference Model and not strictly conforming
to the OSI definition of the transport layer, the Transmission Control Protocol
(TCP) and the User Datagram Protocol (UDP) of the Internet Protocol Suite are
commonly categorized as

## Layer 5: Session Layer

The session layer controls the dialogues (connections) between computers. It
establishes, manages and terminates the connections between the local and remote
application. It provides for full-duplex, half-duplex, or simplex operation, and
establishes procedures for checkpointing, suspending, restarting, and
terminating a session. In the OSI model, this layer is responsible for
gracefully closing a session, which is handled in the Transmission Control
Protocol at the transport layer in the Internet Protocol Suite. This layer is
also responsible for session checkpointing and recovery, which is not usually
used in the Internet Protocol Suite. The session layer is commonly implemented
explicitly in application environments that use remote procedure calls.

## Layer 6: Presentation Layer

The presentation layer establishes context between application-layer entities,
in which the application-layer entities may use different syntax and semantics
if the presentation service provides a mapping between them. If a mapping is
available, presentation protocol data units are encapsulated into session
protocol data units and passed down the protocol stack.

This layer provides independence from data representation by translating between
application and network formats. The presentation layer transforms data into the
form that the application accepts. This layer formats data to be sent across a
network. It is sometimes called the syntax layer.[10] The presentation layer can
include compression functions.[11] The Presentation Layer negotiates the
Transfer Syntax.

The original presentation structure used the Basic Encoding Rules of Abstract
Syntax Notation One (ASN.1), with capabilities such as converting an
EBCDIC-coded text file to an ASCII-coded file, or serialization of objects and
other data structures from and to XML. ASN.1 effectively makes an application
protocol invariant with respect to syntax.

## Layer 7: Application Layer

The application layer is the OSI layer closest to the end user, which means both
the OSI application layer and the user interact directly with the software
application. This layer interacts with software applications that implement a
communicating component. Such application programs fall outside the scope of the
OSI model. Application-layer functions typically include identifying
communication partners, determining resource availability, and synchronizing
communication. When identifying communication partners, the application layer
determines the identity and availability of communication partners for an
application with data to transmit. The most important distinction in the
application layer is the distinction between the application-entity and the
application. For example, a reservation website might have two
application-entities: one using HTTP to communicate with its users, and one for
a remote database protocol to record reservations. Neither of these protocols
have anything to do with reservations. That logic is in the application itself.
The application layer per se has no means to determine the availability of
resources in the network.
