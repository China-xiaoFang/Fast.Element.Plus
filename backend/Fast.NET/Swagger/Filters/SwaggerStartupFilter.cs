﻿// Apache开源许可证
//
// 版权所有 © 2018-2024 1.8K仔
//
// 特此免费授予获得本软件及其相关文档文件（以下简称“软件”）副本的任何人以处理本软件的权利，
// 包括但不限于使用、复制、修改、合并、发布、分发、再许可、销售软件的副本，
// 以及允许拥有软件副本的个人进行上述行为，但须遵守以下条件：
//
// 在所有副本或重要部分的软件中必须包括上述版权声明和本许可声明。
//
// 软件按“原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于对适销性、适用性和非侵权的保证。
// 在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，
// 无论是因合同、侵权或其他方式引起的，与软件或其使用或其他交易有关。

using Fast.Swagger.Builders;
using Fast.Swagger.Internal;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace Fast.Swagger.Filters;

/// <summary>
/// <see cref="SwaggerStartupFilter"/> 应用启动时自动注册中间件
/// </summary>
public class SwaggerStartupFilter : IStartupFilter
{
    /// <summary>
    /// 配置中间件
    /// </summary>
    /// <param name="action"></param>
    /// <returns></returns>
    public Action<IApplicationBuilder> Configure(Action<IApplicationBuilder> action)
    {
        return app =>
        {
            // 判断是否启用规范化文档
            if (Penetrates.SwaggerSettings.Enable!.Value)
            {
                // 配置 Swagger 全局参数
                app.UseSwagger(options => SwaggerDocumentBuilder.Build(options, Penetrates.SwaggerOptions?.Swagger()));

                // 配置 Swagger UI 参数
                app.UseSwaggerUI(options => SwaggerDocumentBuilder.BuildUI(options, Penetrates.SwaggerOptions?.SwaggerUI()));
            }
        };
    }
}