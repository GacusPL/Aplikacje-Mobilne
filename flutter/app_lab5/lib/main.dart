import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Hello Flutter'),
        backgroundColor: Colors.amber,
          centerTitle: true
        ),
        body: Container(
          width: 100,
          height: 80,
          color: Colors.blueAccent,
          child: Text('box', style: TextStyle(
              color: Colors.red,
            fontWeight: FontWeight(800)
          )),
          alignment: Alignment.center,
        ),
      ),
    );
  }
}