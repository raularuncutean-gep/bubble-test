import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as d3 from 'd3';
import { text } from 'd3';
import { IClient } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent {
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() clientData!: IClient[];

  @Output() selectItem: EventEmitter<IClient> = new EventEmitter<IClient>();

  constructor(private clientService: ClientService) {}

  ngOnChanges() {
    if (this.clientData && this.clientData.length != 0) {
      let bubble = d3.pack().size([this.width, this.height]);
      d3.selectAll('.bubble').remove();
      let svg = d3
        .select('#chart')
        .append('svg')
        //  .attr('viewBox','0 0 960 600')
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('class', 'bubble')
        .on('resize', () => {
          d3.select('#chart')
            .attr('width', this.width)
            .attr('height', this.height);
        });
      let dataSet = {
        children: [
          {
            children: this.clientData,
          },
        ],
      };

      let nodes = d3.hierarchy(dataSet).sum(() => {
        return Math.floor(Math.random() * 100) + 60;
      });

      var defs = svg.append('defs');
      defs
        .append('radialGradient')
        .attr('id', 'sun-gradient')
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('r', '50%')
        .selectAll('stop')
        .data([
          { offset: '0%', color: '#ffffff' },
          { offset: '69%', color: '#e8ebf1' },
          { offset: '100%', color: '#b7c1d2' },
        ])
        .enter()
        .append('stop')
        .attr('offset', function (d) {
          return d.offset;
        })
        .attr('stop-color', function (d) {
          return d.color;
        });

      let node = svg
        .selectAll('.node')
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function (d: any) {
          return !d.children;
        })
        .append('g')
        .attr('class', 'node')
        .attr('transform', function (d: any) {
          return 'translate(' + d.x + ',' + d.y + ')';
        })
        .attr('fill', '#1f77b400')
        .on('mouseover', function (d: any) {
          d3.select(this).attr('fill', 'url(#sun-gradient)');
        })
        .on('mouseout', function (d: any) {
          d3.select(this).attr('fill', '#1f77b400');
        })
        .on('click', (d) => {
          console.log(d.srcElement.__data__.data.clientId);
          this.selectItem.emit({
            clientId: d.srcElement.__data__.data.clientId,
            clientName: d.srcElement.__data__.data.clientName,
            bpcCode: d.srcElement.__data__.data.bpcCode,
            bpcName: d.srcElement.__data__.data.bpcName,
            img: d.srcElement.__data__.data.image,
          });
        });

      node
        .append('circle')
        .attr('x', function (d: any) {
          return d.x;
        })
        .attr('y', function (d: any) {
          return d.y;
        })
        .attr('r', function (d: any) {
          return d.r;
        })
        .style('stroke', '#b7c1d2')
        .style('stroke-width', '0.3');

      node
        .append('text')
        .attr('dy', '.2em')
        .style('text-anchor', 'middle')
        .attr('id', function (d: any) {
          return 'id' + d.data.bpcCode;
        })
        .attr('font-family', 'sans-serif')
        .attr('font-size', function (d: any) {
          return d.r / 5;
        })
        .attr('fill', 'black');

      node
        .append('image')
        .attr('y', function (d: any) {
          return -(d.r + 25) / 2;
        })
        .attr('x', function (d: any) {
          return -(d.r + 25) / 2;
        })
        .attr('href', function (d: any) {
          return d.data.img;
        })
        .on('error', function (d) {
          //  console.log( d.srcElement.__data__.data.clientId)
          d3.select(this).remove();
          d3.select(String('#id' + d.srcElement.__data__.data.bpcCode)).text(
            d.srcElement.__data__.data.clientName
          );

          // d3.select("#"+d.data.clientId).remove();
        })
        .style('height', function (d: any) {
          return d.r + 25;
        })
        .style('width', function (d: any) {
          return d.r + 25;
        });
    }
  }
}
